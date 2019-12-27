import mongoose from 'mongoose';


interface ProductCategoryBase {
  name: string;
  parentId?: mongoose.Schema.Types.ObjectId;
  children: ProductCategoryBase[];
}

// Front-End usage
export interface ProductCategory extends Omit<ProductCategoryBase, 'children'> {
  readonly _id: string;
  children: ProductCategory[];
}

export interface ProductCategoryModel extends ProductCategoryBase, mongoose.Document {}
