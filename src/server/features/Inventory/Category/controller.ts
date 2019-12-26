import { NextFunction, Request, Response } from 'express';
import { ProductCategory } from './model';
import { CommonError } from '../../../utils/errors';


const createProductCategory = (req: Request, res: Response, next: NextFunction): void => {
  const newCategory = new ProductCategory(req.body);

  newCategory.save((err, doc) => {
    if (err) return next(err);

    res.json(doc.toObject());
  });
};

/**
 * Returns categories tree
 */
const getAllCategories = (req: Request, res: Response, next: NextFunction): void => {
  ProductCategory
    .find({})
    .populate({
      path: 'childrens',
      populate: { path: 'childrens' },
    })
    .then((categories) => {
      res.json(categories.filter((cat) => !cat.parentId));
    })
    .catch(next);
};

const getProductCategory = (): void => {};

const updateProductCategory = (): void => {};

const deleteCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { categoryId } = req.params;

  ProductCategory.findByIdAndDelete(categoryId)
    .then((category) => {
    // TOOD: galobal not found handler
      if (!category) return next(new CommonError({ message: 'Category no found' }));

      res.json(category.toObject());
    })
    .catch((err) => {
      next(err);
    });
};


export default {
  createProductCategory,
  getAllCategories,
  getProductCategory,
  updateProductCategory,
  deleteCategory,
};
