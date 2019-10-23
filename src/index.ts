import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import { errorHandler } from './server/utils/errors';
import { logger } from './server/utils/logger';
import { User } from './server/models/User';
import './server/middleware/auth';


dotenv.config();
const { DB_URI, port = 8080 } = process.env;

const app = express();


// Init DB
mongoose.connect(DB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', (err): void => {
  logger.error(err);
  process.exit(1);
});
mongoose.connection.on('open', () => {
  logger.info('MongoDB connected');
});

// Common middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session
const RedisStore = connectRedis(session);
const redisClient = redis.createClient();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'adfO23123sp2ie2',
  resave: false,
  saveUninitialized: true,
}));

redisClient.on('connect', () => {
  logger.info('Redis store connected');
});
redisClient.on('error', err => {
  logger.error(err);
  process.exit(1);
});

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Express middleware
app.get('/', (req: Request, res: Response): Response => res.send('home page'));

app.post('/signup', (req: Request, res, next) => {
  const { email, name, password } = req.body;

  const user = new User({ email, name, password });
  user.save(err => {
    if (err) return next(err);

    logger.info('A new user created');
    res.send('User saved');
  });
});
//

app.get('/dashboard', (req, res) => res.send('dashboard page'));

app.post('/signin', passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/dashboard',
}));

app.use(errorHandler);


//
app.listen(8080, () => logger.info(`Server is running on port ${port}`));
