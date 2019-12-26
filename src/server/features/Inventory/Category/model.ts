import mongoose, { Model } from 'mongoose';
import { CommonError } from '../../../utils/errors';
import { logger } from '../../../utils/logger';


// TODO: extract types in to separate file
export interface ProductCategory {
  name: string;
  parentId?: mongoose.Schema.Types.ObjectId;
  childrens: ProductCategory[];
}

export interface ProductCategoryModel extends ProductCategory, mongoose.Document {}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  childrens: {
    type: [{ type: mongoose.Schema.Types.ObjectId }],
  },
});


schema.pre('save', async function pre(next): Promise<void> {
  const parentId = this.get('parentId');
  const name = this.get('name');

  if (parentId) {
    const model = (this.constructor as Model<ProductCategoryModel>);

    const [parentCategory, similarCategories] = await Promise.all([
      model.findById(parentId),
      model.find({
        _id: { $ne: this.id },
        name,
        parentId: {
          $exists: true,
        },
      }),
    ]);

    // Check whether the parent category valid
    if (!parentCategory) return next(new CommonError({ message: 'Parent category not found' }));

    // Check for duplicates (similarCategories have the same name)
    if (similarCategories && similarCategories.length !== 0) {
      const isDuplicated = similarCategories.some((similarCategory) => {
        if (similarCategory.get('parentId').toString() === parentId.toString()) {
          return true;
        }
        return false;
      });

      if (isDuplicated) return next(new CommonError({ message: 'Duplicate category' }));
    }

    next();
  } else {
    next();
  }
});

schema.post('save', (doc) => {
  const parentId = doc.get('parentId');

  // If saved category has parent, update it children refs
  if (parentId) {
    (doc.constructor as Model<ProductCategoryModel>)
      .updateOne(
        { _id: doc.get('parentId') },
        {
          $push: {
            childrens: doc.id,
          },
        },
      )
      .catch(logger.errror);
  }
});


export const ProductCategory = mongoose.model<ProductCategoryModel>('ProductCategory', schema);
