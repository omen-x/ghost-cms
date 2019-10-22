import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { errorHandler } from './server/utils/errors';
import { logger } from './server/utils/logger';

require('dotenv').config();

const { DB_URI } = process.env;

const { port = 8080 }: { port?: number } = process.env;
const app = express();

// Init DB
mongoose.connect(DB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', (err): void => {
  logger.error(err);
  process.exit(1);
});
mongoose.connection.on('open', () => {
  logger.info('DB is running');
});


// Express middleware
app.get('/', (req: Request, res: Response): Response => res.send('yo'));

app.use(errorHandler);


//
app.listen(8080, (): void => logger.info(`Server is running on port ${port}`));
