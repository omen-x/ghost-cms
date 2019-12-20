import mongoose from 'mongoose';
import { logger } from '../utils/logger';


const initDB = (): void => {
  mongoose.connect((process.env.DB_URI as string), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection.on('error', (err): void => {
    logger.error(err);
    process.exit(1);
  });

  mongoose.connection.on('open', (): void => {
    logger.info('MongoDB connected');
  });

  mongoose.set('useCreateIndex', true);
};

export default initDB;
