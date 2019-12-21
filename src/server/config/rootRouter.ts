import express, { Request, Response } from 'express';
import loginRouter from '../features/User/router';
import productCategoryRouter from '../features/Inventory/Category/router';
import productRouter from '../features/Inventory/Product/router';


const router = express.Router();

const protectRoute = (req: Request, res: Response, next: Function): void => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};

// Public routes
router.use(
  loginRouter,
);

// Protected routes
router.use(
  '/api',
  protectRoute,
  //
  productCategoryRouter,
  productRouter,
);

// Dashboard(home page)
router.use('/dashboard', protectRoute, express.static('build/app', { extensions: ['html'] }));

router.get('/dashboard', (req, res): void => {
  res.sendFile('index.html', { root: 'build/app' });
});

// Default redirect
router.get('*', (req, res): void => {
  res.redirect('/login');
});


export default router;
