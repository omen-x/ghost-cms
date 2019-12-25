import express, { Request, Response } from 'express';
import productCategoryRouter from '../features/Inventory/Category/router';
import productRouter from '../features/Inventory/Product/router';
import userRouter from '../features/User/router';


const router = express.Router();

const protectRoute = (req: Request, res: Response, next: Function): void => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};


// Protected routes
router.use(
  '/api',
  protectRoute,
  //
  userRouter,
  productCategoryRouter,
  productRouter,
);

// Login page
router.get('/login', (req, res) => {
  if (req.isAuthenticated()) res.redirect('/');
  else res.sendFile('login.html', { root: './build/public' });
});
// Home(Dashboard) page
router.use('/', protectRoute, express.static('build/app', { extensions: ['html'] }));

router.get('*', (req, res): void => {
  if (req.isAuthenticated()) {
    res.sendFile('index.html', { root: 'build/app' });
  } else res.redirect('/login');
});


export default router;
