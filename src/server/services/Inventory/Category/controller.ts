import { NextFunction, Request, Response } from 'express';
import { CommonError } from '../../../utils/errors';
import { ProductCategory } from './model';
import { ProductCategory as IProductCategory } from './types';
import { ResponseBuilder } from '../../../utils/responseBuilder';


const createProductCategory = (req: Request, res: Response, next: NextFunction): void => {
  const newCategory = new ProductCategory(req.body);

  newCategory.save((err, doc) => {
    if (err) return next(err);

    res.json(new ResponseBuilder(doc.toObject()));
  });
};

/**
 * Returns categories tree
 * Nesting: 3 lvls
 */
const getAllCategories = (req: Request, res: Response, next: NextFunction): void => {
  ProductCategory
    .find({})
    .populate({
      path: 'children',
      populate: { path: 'children', populate: { path: 'children' } },
    })
    .then((categories) => {
      const sort = (a: IProductCategory): number => (a.children.length > 0 ? -1 : 1);
      const sortRecursively = (arr: IProductCategory[]): void => {
        arr.sort(sort);

        arr.forEach((c) => {
          if (c.children.length > 0) sortRecursively(c.children);
        });
      };

      sortRecursively(categories);

      return categories;
    })
    .then((categories) => {
      const filteredCategories = categories.filter((cat) => !cat.parentId);

      res.json(new ResponseBuilder(filteredCategories));
    })
    .catch(next);
};

const getProductCategory = (): void => {};

const updateProductCategory = (): void => {};

const deleteCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { categoryId } = req.params;

  ProductCategory.findByIdAndDelete(categoryId)
    .then((category) => {
      if (!category) return next(new CommonError({ message: 'Category no found' }));

      res.json(new ResponseBuilder(category.toObject()));
    })
    .catch(next);
};


export default {
  createProductCategory,
  getAllCategories,
  getProductCategory,
  updateProductCategory,
  deleteCategory,
};
