import express from 'express';
import { User } from '../models/User';
import { logger } from '../utils/logger';


const router = express.Router();


router.post('/signup', (req, res, next) => {
  const { email, name, password } = req.body;

  const user = new User({ email, name, password });

  user.save(err => {
    if (err) return next(err);

    logger.info('A new user created');
    res.send('User saved');
  });
});


export default router;
