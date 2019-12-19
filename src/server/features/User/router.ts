import express from 'express';
import controller from './controller';


const router = express.Router();

router.get('/login', controller.loginPage);
router.post('/login', controller.loginUser);
router.post('/signout', controller.signoutUser);


export default router;
