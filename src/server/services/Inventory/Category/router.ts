import express from 'express';
import controller from './controller';


const router = express.Router();


/**
 * @param {object} body
 * @param {string} body.name - Category name
 * @param {string} [body.parentId] - Parent category id
 */
router.post('/inventory/category', controller.createProductCategory);

router.get('/inventory/category/all', controller.getAllCategories);

router.get('/inventory/category/:categoryId', controller.getProductCategory);

router.delete('/inventory/category/:categoryId', controller.deleteCategory);


export default router;
