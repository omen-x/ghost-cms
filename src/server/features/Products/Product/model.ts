import mongoose from 'mongoose';


interface Product {
  name: string;
  description: string;
  category: mongoose.Schema.Types.ObjectId;
  price: number;
  image: {
    path: string;
  };
}

interface ProductModel extends Product, mongoose.Document {}

// TODO: images
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductCategory',
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    path: {
      type: String,
      required: true,
    },
  },
});


export const Product = mongoose.model<ProductModel>('Product', schema);
