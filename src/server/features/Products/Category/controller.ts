import { Request, Response, NextFunction } from 'express';
import { ProductCategory } from './model';


const createProductCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { name, parentCategoryID }: ProductCategory = req.body;
  const newCategory = new ProductCategory({ name, parentCategoryID });

  newCategory.save((err) => {
    if (err) return next(err);

    res.sendStatus(204);
  });
};

const getProductCategory = (): void => {};

const updateProductCategory = (): void => {};


export default {
  createProductCategory,
  getProductCategory,
  updateProductCategory,
};
