import express from 'express';
import controller from './controller';


const router = express.Router();


router.post('/storage/uploadImage', controller.uploadImage);


export default router;
