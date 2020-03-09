import express, { Request, Response } from 'express';
import productCategoryRouter from '../services/Inventory/Category/router';
import productRouter from '../services/Inventory/Product/router';
import userRouter from '../services/User/router';
import uploadsRouter from '../services/Uploads/router';


const router = express.Router();

const protectRoute = (req: Request, res: Response, next: Function): void => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};

router.use(userRouter);

// Protected routes
router.use(
  '/api',
  protectRoute,
  //
  productCategoryRouter,
  productRouter,
  uploadsRouter,
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
