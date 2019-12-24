import mongoose, { Model } from 'mongoose';
import { IconName } from '@blueprintjs/icons';
import { CommonError } from '../../../utils/errors';


// TODO: extract types in to separate file
export interface ProductCategory {
  name: string;
  parentCategoryID?: mongoose.Schema.Types.ObjectId;
  icon: IconName;
}

export interface ProductCategoryModel extends ProductCategory, mongoose.Document {}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategoryID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  icon: {
    type: String,
    required: true,
  },
});


schema.pre('save', function pre(next): void {
  const parentCategoryID = this.get('parentCategoryID');
  const name = this.get('name');

  if (parentCategoryID) {
    const model = (this.constructor as Model<ProductCategoryModel>);

    Promise.all([model.findById(parentCategoryID), model.find({ name })])
      .then(([parentCategory, similarCategories]) => {
        // Check whether the parent category exists
        if (!parentCategory) return next(new CommonError({ message: 'Category not found' }));

        // Check for duplicates (similarCategories have the same name)
        if (similarCategories) {
          const isDuplicated = similarCategories.some((similarCategory) => {
            if (similarCategory.get('parentCategoryID').toString() === parentCategoryID.toString()) {
              return true;
            }
            return false;
          });

          if (isDuplicated) return next(new CommonError({ message: 'Duplicate category' }));
        }

        next();
      })
      .catch(next);
  } else {
    next();
  }
});

export const ProductCategory = mongoose.model<ProductCategoryModel>('ProductCategory', schema);
