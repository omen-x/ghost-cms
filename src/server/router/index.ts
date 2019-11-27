import express, { Request, Response } from 'express';
import apiRouter from './api';
import loginRouter from './login';
import dashboardRouter from './dashboard';


const router = express.Router();


const protectRoute = (req: Request, res: Response, next: Function): void => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};


router.use('/api', protectRoute, apiRouter);
router.use('/login', loginRouter);
router.use('/dashboard', protectRoute, dashboardRouter);


router.post('/signout', (req, res): void => {
  req.logout();
  res.send(200);
});

// Default redirect instead of 404
router.get('*', (req, res): void => {
  res.redirect('/login');
});

export default router;
