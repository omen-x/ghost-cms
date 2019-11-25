import express, { Request, Response } from 'express';
import apiRouter from './api';
import loginRouter from './login';
import signupRouter from './signup';


const router = express.Router();


const protectRoute = (req: Request, res: Response, next: Function) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};


router.use('/api', protectRoute, apiRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);


router.post('/signout', (req, res) => {
  req.logout();
  res.send(200);
});


export default router;
