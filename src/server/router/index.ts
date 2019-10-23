import express, { Request, Response } from 'express';
import passport from 'passport';
import apiRouter from './api';
import { User } from '../models/User';
import { logger } from '../utils/logger';


const router = express.Router();

const protectRoute = (req: Request, res: Response, next: Function) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/signin');
};


router.use('/api', protectRoute, apiRouter);

router.post('/signup', (req, res, next) => {
  const { email, name, password } = req.body;

  const user = new User({ email, name, password });

  user.save(err => {
    if (err) return next(err);

    logger.info('A new user created');
    res.send('User saved');
  });
});

router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) return next(err);
    // TODO:
    if (!user) return res.redirect('/');

    req.login(user, errLogin => {
      if (errLogin) return next(errLogin);

      logger.debug('Success user auth');
      res.sendStatus(200);
    });
  })(req, res, next);
});

router.post('/signout', (req, res) => {
  req.logout();
  res.send(200);
});


export default router;
