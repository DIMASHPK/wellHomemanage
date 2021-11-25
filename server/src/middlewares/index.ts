import { NextFunction, Response, Request } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import {
  handleInternalServerError,
  handleUnauthorizedRequestError,
} from '../utils/handleError';

const { JWT_ACCESS_SECRET } = process.env;

export const withAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return handleUnauthorizedRequestError(res);
  }

  try {
    const token = authorization.split(' ')[1];

    if (!token) {
      return handleUnauthorizedRequestError(res);
    }

    jwt.verify(token, JWT_ACCESS_SECRET as string);

    next();
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      return handleUnauthorizedRequestError(res, {
        message: 'Ваш токен истек, нужна повторная авторизация!',
        name: 'Unauthorized',
      });
    }

    handleInternalServerError(res, err as Error);
  }
};
