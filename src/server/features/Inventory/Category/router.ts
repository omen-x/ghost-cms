import express from 'express';
import controller from './controller';


const router = express.Router();


router.post('/inventory/category', controller.createProductCategory);

router.get('/inventory/category/all', controller.getAllCategories);

router.get('/inventory/category/:categoryId', controller.getProductCategory);

router.delete('/inventory/category/:categoryId', controller.deleteCategory);


export default router;
