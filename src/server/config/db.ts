import fs from 'fs';
import parse from 'csv-parse';
import mongoose from 'mongoose';
import { logger } from '../utils/logger';
import { ProductPayload } from '../services/Products/types';
import { Product } from '../services/Products/model';


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

export const storeMockProducts = (): void => {
  const products: ProductPayload[] = [];

  fs.createReadStream('data/products.csv')
    .pipe(parse({
      cast(value, context) {
        // Price
        if (context.column === 2) {
          return value.replace(',', '');
        }
        // Description
        if (context.column === 1 && value === '') {
          return 'No description';
        }
        // Name
        if (context.column === 0) {
          return value.replace(/\s\w*...$/, '');
        }
        return value;
      },
    }))
    .on('data', (row) => {
      products.push({
        name: row[0],
        description: row[1],
        price: row[2],
        image: '/assets/image-placeholder.png',
      });
    })
    .on('end', () => {
      const uniqueProducts = products.filter((p, i) =>
        products.slice(i + 1).findIndex((el) => el.name === p.name) === -1);

      Product.create(...uniqueProducts)
        .then(() => {
          logger.debug('Mock products uploaded');
        })
        .catch(logger.error);
    });
};

export default initDB;
