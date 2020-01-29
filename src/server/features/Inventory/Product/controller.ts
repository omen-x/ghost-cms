import { Request, Response, NextFunction } from 'express';
import { Product } from './model';
import { CommonError } from '../../../utils/errors';
import { ResponseBuilder } from '../../../utils/responseBuilder';


const createProduct = (req: Request, res: Response, next: NextFunction): void => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return next(err);

    res.json(new ResponseBuilder(doc.toObject()));
  });
};


const getProductById = (req: Request, res: Response, next: NextFunction): void => {
  const { productId } = req.params;

  Product
    .findById(productId)
    .populate('category')
    .then((product) => {
      if (!product) return next(new CommonError({ status: 404, message: 'Product not found' }));

      res.json(new ResponseBuilder(product.toObject()));
    })
    .catch(next);
};

const deleteProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { productId } = req.params;

  Product.findByIdAndDelete(productId)
    .then((product) => {
      if (!product) return next(new CommonError({ status: 404, message: 'Product no found' }));

      res.json(new ResponseBuilder(product.toObject()));
    })
    .catch(next);
};


const getProducts = (req: Request, res: Response, next: NextFunction): void => {
  const pageLimit = 50;

  const { page = 1 } = req.query;
  if (page < 1) return next(new CommonError({ status: 400, message: 'Incorrect page number' }));

  const filter = { ...req.query };
  delete filter.page;
  delete filter.sortBy;

  const query = Product.find(filter)
    .skip(pageLimit * (page - 1))
    .limit(pageLimit);

  Promise.all([query.exec(), Product.countDocuments(filter)])
    .then(([products, count]) => {
      const pages = Math.ceil(count / pageLimit);

      res.json(new ResponseBuilder(products, { pages }));
    })
    .catch(next);
};

const getProductsByCategory = (req: Request, res: Response, next: NextFunction): void => {
  const { id: category } = req.params;

  Product.find({ category }, (err, products) => {
    if (err) return next(err);

    res.json(new ResponseBuilder(products));
  });
};

// TODO:
// - categoryID should be validated
const updateProduct = (req: Request, res: Response, next: NextFunction): void => {
  const { productId: _id } = req.params;
  const conditions = { _id };
  const options = { new: true, runValidators: true };

  Product.findOneAndUpdate(
    conditions,
    req.body,
    options,
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
