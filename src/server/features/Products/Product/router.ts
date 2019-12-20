import express from 'express';
import controller from './controller';


const router = express.Router();

router.route('/product')
  .post(controller.createProduct);


export default router;
