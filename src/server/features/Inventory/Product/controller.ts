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


const getProductById = (req: Request, res: Response, next: NextFunction): void => {
  const { productId } = req.params;

  Product
    .findById(productId)
    .populate('category')
    .then((product) => {
      if (!product) return next(new CommonError({ status: 404, message: 'Product not found' }));

      res.json(product.toObject());
    })
    .catch(next);
};

const deleteProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { productId } = req.params;

  Product.findByIdAndDelete(productId)
    .then((product) => {
      if (!product) return next(new CommonError({ status: 404, message: 'Product no found' }));

      res.json(product.toObject());
    })
    .catch(next);
};


const getProducts = (req: Request, res: Response, next: NextFunction): void => {
  const pageLimit = 50;
  const { query } = req;

  const { page = 1 } = query;
  if (page < 1) return next(new CommonError({ status: 400, message: 'Incorrect page number' }));

  const filter = { ...query };
  delete filter.page;
  delete filter.sortBy;

  // pages count
  Product.find(filter)
    .skip(pageLimit * (page - 1))
    .limit(pageLimit)
    .then((products) => {
      res.json(products);
    })
    .catch(next);
};

const getProductsByCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { id: category } = req.params;

  Product.find({ category }, (err, products) => {
    if (err) return next(err);

    res.json(products);
  });
};

// TODO:
// - categoryID should be validated
const updateProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { _id } = req.body;

  Product.findOneAndUpdate(
    { _id },
    req.body,
    { new: true, runValidators: true },
    (err, product): void => {
      if (err) return next(err);
      if (!product) return next(new CommonError({ message: 'Product not found' }));

      res.json(product.toObject());
    },
  );
};

export default {
  createProduct,
  getProductById,
  getProducts,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
};
