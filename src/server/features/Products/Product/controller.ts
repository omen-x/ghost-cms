import { Request, Response, NextFunction } from 'express';
import { Product } from './model';

const createProduct = (req: Request, res: Response, next: NextFunction): void => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return next(err);

    res.json(doc.toObject());
  });
};


export default {
  createProduct,
};
