import express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { errorHandler } from './utils/errors';
import { logger } from './utils/logger';
import './middleware/auth';
import rootRouter from './config/rootRouter';
import initDB from './config/db';


dotenv.config();

const { port = 8080 } = process.env;
const app = express();


initDB();

// General middleware
app.use(helmet({
  permittedCrossDomainPolicies: true,
  referrerPolicy: true,
}));
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

redisClient.on('connect', (): void => {
  logger.info('Redis store connected');
});

redisClient.on('error', (err): void => {
  logger.error(err);
  process.exit(1);
});

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Custom middleware
app.use('/', rootRouter);
app.use(errorHandler);

//
app.listen(8080, (): void => logger.info(`Server is running on port ${port}`));
