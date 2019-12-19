import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { CommonError } from '../../utils/errors';
import { logger } from '../../utils/logger';


const loginUser = (req: Request, res: Response, next: NextFunction): void => {
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
};

const signoutUser = (req: Request, res: Response): void => {
  req.logout();
  res.send(200);
};

const loginPage = (req: Request, res: Response): void => {
  res.sendFile('login.html', { root: './build/public' });
};

export default {
  loginUser,
  signoutUser,
  loginPage,
};
