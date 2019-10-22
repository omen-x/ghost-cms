const winston = require('winston');

const { createLogger, format, transports } = winston;


const consoleFormat = format.printf(({
  level, message, timestamp,
}: { level: string; message: string; timestamp: string}) => `${level}${level.includes('info') ? ' ' : ''} [${timestamp}] :: ${message}`);

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    new transports.File({ dirname: 'logs', filename: 'error.log', level: 'error' }),
    new transports.File({ dirname: 'logs', filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.level = 'debug';
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      consoleFormat,
    ),
  }));
}
