import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { CommonError } from '../../utils/errors';
import { logger } from '../../utils/logger';
import { UserModel, User } from './model';


const createUser = (req: Request, res: Response, next: NextFunction): void => {
  const user = new User(req.body);

  user.save((err) => {
    if (err) {
      if (err.code === 11000) {
        const message = 'User already exists';
        return next(new CommonError({ message, clientMessage: message }));
      }

      return next(err);
    }

    res.sendStatus(204);
  });
};

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
      res.redirect('/');
    });
  })(req, res, next);
};

const getUserInfo = (req: Request, res: Response): void => {
  if (!req.user) return res.redirect('/');

  res.json((req.user as UserModel).getInfo());
};

const logoutUser = (req: Request, res: Response): void => {
  req.logout();
  res.redirect('/login');
};


export default {
  createUser,
  loginUser,
  logoutUser,
  getUserInfo,
};
