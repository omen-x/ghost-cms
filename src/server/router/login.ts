import express from 'express';
import passport from 'passport';
import { logger } from '../utils/logger';


const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('login.html', { root: './build/public' });
});

router.post('/', (req, res, next) => {
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

export default router;
