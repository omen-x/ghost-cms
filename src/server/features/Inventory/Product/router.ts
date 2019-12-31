import express from 'express';
import controller from './controller';


const router = express.Router();


router.post('/inventory/product', controller.createProduct);
router.get('/inventory/product/:productId', controller.getProductById);
router.get('/inventory/product/', controller.getProducts);
router.delete('/inventory/product/:productId', controller.deleteProduct);


export default router;
