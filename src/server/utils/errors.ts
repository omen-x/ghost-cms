import { Request, Response } from 'express';
import { ResponseBuilder } from './responseBuilder';

const { logger } = require('./logger');


export class CommonError extends Error {
  private readonly $uiMessage: string;
  private readonly $status: number;

  public constructor(params: { message?: string; status?: number; uiMessage?: string }) {
    const { message = '', status = 500, uiMessage = '' } = params;
    super(message);

    this.$uiMessage = uiMessage;
    this.$status = status;
  }

  public get status(): number {
    return this.$status;
  }

  public get uiMessage(): string {
    return this.$uiMessage;
  }
}

export function errorHandler(
  err: CommonError, req: Request, res: Response, next: Function,
): Response {
  if (res.headersSent) return next(err);

  logger.error(err);

  return res
    .status(err.status || 500)
    .json(new ResponseBuilder(null, null, {
      message: err.message || 'Internal Server Error',
      uiMessage: err.uiMessage || 'Something Went Wrong',
    }));
}
