import express, { Request, Response } from 'express';
import { errorHandler } from './server/utils/errors';
import { logger } from './server/utils/logger';


const { port = 8080 }: { port?: number } = process.env;
const app = express();


app.get('/', (req: Request, res: Response): Response => res.send('yo'));

app.use(errorHandler);


app.listen(8080, (): void => logger.info(`Server is running on port ${port}`));
