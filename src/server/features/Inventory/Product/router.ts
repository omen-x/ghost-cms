import express from 'express';
import controller from './controller';


const router = express.Router();


router.post('/inventory/product', controller.createProduct);

router.get('/inventory/product/:productId', controller.getProductById);
router.post('/inventory/product/getProducts', controller.getProducts);

router.delete('/inventory/product/:productId', controller.deleteProduct);
router.put('/inventory/product/:productId', controller.updateProduct);


export default router;
