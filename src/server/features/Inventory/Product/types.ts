import { Types, Document } from 'mongoose';


interface Product {
  name: string;
  description: string;
  category: Types.ObjectId;
  price: number;
  image?: string;
  dateCreated: string;
}

export interface ProductModel extends Product, Document {}
