import express from 'express';
import passport from 'passport';
import { logger } from '../utils/logger';
import { CommonError } from '../utils/errors';


const router = express.Router();

router.get('/', (req, res): void => {
  res.sendFile('login.html', { root: './build/public' });
});

router.post('/', (req, res, next): void => {
  passport.authenticate('local', (err, user): void => {
    if (err) return next(err);
    if (!user) {
      return next(new CommonError({
        message: 'User not found',
        clientMessage: 'User not found',
      }));
    }

    req.login(user, (errLogin): void => {
      if (errLogin) return next(errLogin);

      logger.debug('Success user auth');
      res.redirect('/dashboard');
    });
  })(req, res, next);
});

export default router;
