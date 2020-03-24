import { RequestHandler } from 'express';
import { CommonError } from '../utils/errors';


/**
 * - Async error handling
 */
const ServiceMethod = (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<RequestHandler>) => {
  const original = descriptor.value;

  // eslint-disable-next-line no-param-reassign
  descriptor.value = async function (...args) {
    const [, , next] = args;

    try {
      if (!original) return next(new CommonError({}));

      return await original.apply(this, args);
    } catch (e) {
      next(e);
    }
  };
};

export default ServiceMethod;
