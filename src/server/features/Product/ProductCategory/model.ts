import mongoose from 'mongoose';
import { CommonError } from '../../../utils/errors';


interface ProductCategory {
  name: string;
  parentCategoryID?: mongoose.Schema.Types.ObjectId;
}

interface ProductCategoryModel extends ProductCategory, mongoose.Document {}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategoryID: {
    type: mongoose.Schema.Types.ObjectId,
  },
});


export const ProductCategory = mongoose.model<ProductCategoryModel>('ProductCategory', schema);


schema.pre('save', function pre(next): void {
  const parentCategoryID = this.get('parentCategoryID');

  if (parentCategoryID) {
    ProductCategory.findById(parentCategoryID, (err, cat): void => {
      if (err) return next(err);
      if (!cat) return next(new CommonError({ message: 'category not found' }));

      return next();
    });
  } else {
    next();
  }
});
