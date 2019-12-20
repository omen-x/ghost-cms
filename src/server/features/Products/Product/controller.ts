import { Request, Response, NextFunction } from 'express';
import { Product } from './model';
import { CommonError } from '../../../utils/errors';


const createProduct = (req: Request, res: Response, next: NextFunction): void => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return next(err);

    res.json(doc.toObject());
  });
};

const getProductByID = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  Product.findById(id, (err, product) => {
    if (err) return next(err);
    if (!product) return next(new CommonError({ message: 'Product not found' }));

    res.json(product.toObject());
  });
};

const getProducts = (req: Request, res: Response, next: NextFunction): void => {
  Product.find((err, products) => {
    if (err) return next(err);

    return res.json(products);
  });
};

const getProductsByCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { id: category } = req.params;

  Product.find({ category }, (err, products) => {
    if (err) return next(err);

    res.json(products);
  });
};


export default {
  createProduct,
  getProductByID,
  getProducts,
  getProductsByCategory,
};
