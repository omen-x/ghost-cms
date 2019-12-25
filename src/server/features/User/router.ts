import express from 'express';
import controller from './controller';


const userRouter = express.Router();

userRouter.post('/user', controller.createUser);
userRouter.get('/user', controller.getUserInfo);

userRouter.post('/login', controller.loginUser);
userRouter.get('/logout', controller.logoutUser);

export default userRouter;
