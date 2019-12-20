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

const deleteProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  Product.findByIdAndDelete(id, (err, product) => {
    if (err) return next(err);
    if (!product) return next(new CommonError({ message: 'Product not found' }));

    res.sendStatus(204);
  });
};


export default {
  createProduct,
  getProductByID,
  getProducts,
  getProductsByCategory,
  updateProduct,
  deleteProduct,
};
