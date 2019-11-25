import { Request, Response } from 'express';

const { logger } = require('./logger');


// TODO: log file path
export class CommonError extends Error {
  private readonly $clientMessage: string;
  private readonly $status: number;

  public constructor(params: { message?: string; status?: number; clientMessage?: string }) {
    const { message = '', status = 500, clientMessage = '' } = params;
    super(message);

    this.$clientMessage = clientMessage;
    this.$status = status;
  }

  public get status(): number {
    return this.$status;
  }

  public get clientMessage(): string {
    return this.$clientMessage;
  }
}

export function errorHandler(
  err: CommonError, req: Request, res: Response, next: Function,
): Response {
  if (res.headersSent) return next(err);

  logger.error(err);

  return res
    .status(err.status || 500)
    .json({
      message: err.message || 'Internal Server Error',
      clientMessage: err.clientMessage || 'Something Went Wrong',
    });
}
