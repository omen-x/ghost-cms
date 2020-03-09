import express from 'express';
import controller from './controller';


const router = express.Router();


router.post('/products', controller.createProduct);

router.get('/products/:productId', controller.getProductById);
router.get('/products/', controller.getProducts);

router.delete('/products/:productId', controller.deleteProduct);
router.put('/products/:productId', controller.updateProduct);


export default router;
