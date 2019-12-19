import express from 'express';
import controller from './controller';


const router = express.Router();

router.route('/product-category')
  .post(controller.createProductCategory)
  .get(controller.getProductCategory)
  .put(controller.updateProductCategory);


export default router;
