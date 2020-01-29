import mongoose, { Schema } from 'mongoose';
import { ProductModel } from './types';


const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: 'ProductCategory',
  },
  price: {
    type: Number,
    required: true,
  },
  dateCreated: {
    type: String,
  },
});


schema.pre('save', function pre(next) {
  this.set('dateCreated', new Date().toUTCString());

  next();
});


export const Product = mongoose.model<ProductModel>('Product', schema);
