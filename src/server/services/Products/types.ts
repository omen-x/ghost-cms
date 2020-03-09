import { Types, Document } from 'mongoose';


interface Product {
  name: string;
  description: string;
  category?: Types.ObjectId;
  price: number;
  image: string;
  dateCreated: Date;
}

export type ProductPayload = Omit<Product, 'dateCreated'> & {};

export interface ProductModel extends Product, Document {}
