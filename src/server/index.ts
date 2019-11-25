import express from 'express';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import redis from 'redis';
import connectRedis from 'connect-redis';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import { errorHandler } from './utils/errors';
import { logger } from './utils/logger';
import './middleware/auth';
import router from './router';


dotenv.config();
const { DB_URI = '', port = 8080 } = process.env;

const app = express();


// Init DB
mongoose.connect(DB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', err => {
  logger.error(err);
  process.exit(1);
});
mongoose.connection.on('open', () => {
  logger.info('MongoDB connected');
});

// General middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build/public', {
  extensions: ['html, htm'],
}));

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

// Custom middleware
app.use('/', router);
app.use(errorHandler);

//
app.listen(8080, () => logger.info(`Server is running on port ${port}`));
