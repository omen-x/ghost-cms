import { Request, Response, NextFunction } from 'express';
import { ProductCategory } from './model';


const createProductCategory = (req: Request, res: Response, next: NextFunction): void => {
  const newCategory = new ProductCategory(req.body);

  newCategory.save((err, doc) => {
    if (err) return next(err);

    res.json(doc.toObject());
  });
};

const getProductCategory = (): void => {};

const updateProductCategory = (): void => {};


export default {
  createProductCategory,
  getProductCategory,
  updateProductCategory,
};
