import express from 'express';
import controller from './controller';


const router = express.Router();

router.post('/product', controller.createProduct);

router.get('/product/:id', controller.getProductByID);
router.get('/product', controller.getProducts);
router.get('/product/category/:id', controller.getProductsByCategory);


export default router;
