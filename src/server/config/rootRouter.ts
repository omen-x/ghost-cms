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

// Home(Dashboard)
router.use('/', protectRoute, express.static('build/app', { extensions: ['html'] }));

router.get('/', (req, res): void => {
  res.sendFile('index.html', { root: 'build/app' });
});

router.get('*', (req, res): void => {
  // TODO: 404 page redirect
  if (req.isAuthenticated()) res.redirect('/');
  else res.redirect('/login');
});


export default router;
