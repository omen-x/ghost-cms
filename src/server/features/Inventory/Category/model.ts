import mongoose, { Model, Schema } from 'mongoose';
import { CommonError } from '../../../utils/errors';
import { logger } from '../../../utils/logger';
import { ProductCategoryModel } from './types';


const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: Schema.Types.ObjectId,
  },
  children: {
    type: [{ type: Schema.Types.ObjectId }],
  },
});


schema.pre('save', async function pre(next) {
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
            children: doc.id,
          },
        },
      )
      .catch(logger.errror);
  }
});


export const ProductCategory = mongoose.model<ProductCategoryModel>('ProductCategory', schema);
