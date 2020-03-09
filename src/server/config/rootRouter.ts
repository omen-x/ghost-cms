import express, { Request, Response } from 'express';
import productRouter from '../services/Products/router';
import userRouter from '../services/Users/router';
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
