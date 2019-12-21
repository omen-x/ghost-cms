import express from 'express';
import controller from './controller';


const router = express.Router();

router.get('/login', controller.loginPage);

router.post('/user', controller.signupUser);
router.get('/user', controller.getUserInfo);

router.post('/login', controller.loginUser);
router.get('/logout', controller.logoutUser);

export default router;
