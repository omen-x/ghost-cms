import express from 'express';
import controller from './controller';


const router = express.Router();


router.post('/uploads/images', controller.uploadImage);


export default router;
