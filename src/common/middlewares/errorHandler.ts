import { NextFunction, Request, Response } from 'express';
import { Error as MongooseError } from 'mongoose';

import { CustomError } from '@common/models';

export const handleCustomErrors = (err: Error | CustomError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    const { statusCode, error } = err;
    return res.status(statusCode).json({ error });
  }

  return next(err);
};

export const handleGlobalErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  return res.status(500).send(err.message);
};

export const handleValidationError = (err: Error | MongooseError, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof MongooseError.ValidationError) {
    return res.status(400).json(err);
  }
  return next(err);
};