import { Request, Response } from 'express';


const createProductCategory = (req: Request, res: Response): void => {
  res.send('creating product');
};
const getProductCategory = (): void => {};

const updateProductCategory = (): void => {};


export default {
  createProductCategory,
  getProductCategory,
  updateProductCategory,
};
