import { Response } from 'express';

export const handleError = (res: Response, err: Error): void => {
  res.status(500).json(err);
};
