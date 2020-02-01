import { Types, Document } from 'mongoose';


interface Product {
  name: string;
  description: string;
  category?: Types.ObjectId;
  price: number;
  dateCreated: string;
}

export interface ProductResponse extends Product {
  readonly _id: string;
}

export interface ProductMetaResponse {
  pages: number;
}

export type ProductPayload = Omit<Product, 'dateCreated'> & {};

export interface ProductModel extends Product, Document {}
