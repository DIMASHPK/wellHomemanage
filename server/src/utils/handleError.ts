import { Response } from 'express';

export const handleInternalServerError = (res: Response, err: Error): void => {
  res.status(500).json(err);
};

export const handleBadRequestError = (
  res: Response,
  err: Error = { message: 'invalid input', name: 'badRequest' }
): void => {
  res.status(400).json(err);
};

export const handleUnauthorizedRequestError = (
  res: Response,
  err: Error = {
    message: 'Пользователь не авторизирован',
    name: 'Unauthorized',
  }
): void => {
  res.status(401).json(err);
};
