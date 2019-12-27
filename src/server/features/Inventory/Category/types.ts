import mongoose from 'mongoose';


export interface ProductCategory {
  name: string;
  parentId?: mongoose.Schema.Types.ObjectId;
  children: ProductCategory[];
}

export interface ProductCategoryResponse extends Omit<ProductCategory, 'children'> {
  readonly _id: string;
  children: ProductCategoryResponse[];
}

export type ProductCategoryPayload = Omit<ProductCategory, 'children' | 'parentId'> & {
  parentId?: string;
};

export interface ProductCategoryModel extends ProductCategory, mongoose.Document {}
