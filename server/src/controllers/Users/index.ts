import { Response } from 'express';
import {
  handleBadRequestError,
  handleInternalServerError,
} from 'utils/handleError';
import { RequestWithTypedBody } from 'constants/types';
import User from 'models/Users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserBodyType } from './types';

const { JWT_ACCESS_SECRET, JWT_ACCESS_EXPIRED_TIME } = process.env;

export default class UsersController {
  public signUp = async (
    req: RequestWithTypedBody<UserBodyType>,
    res: Response
  ): Promise<void> => {
    const { body } = req;
    const { username, password } = body;

    if (!username || !password) {
      return handleBadRequestError(res);
    }

    try {
      const existingUser = await User.findOne({ where: { username } });

      if (existingUser) {
        handleBadRequestError(res, {
          message: 'Пользователь с таким именем пользователя уже существует',
          name: 'badRequest',
        });

        return;
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create<User>({
        username,
        password: hashedPassword,
      });

      res.send({
        newUser,
      });
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };

  public signIn = async (
    req: RequestWithTypedBody<UserBodyType>,
    res: Response
  ): Promise<void> => {
    const { username, password } = req.body;

    try {
      const currentUser = await User.findOne({
        where: { username },
      });

      if (!currentUser) {
        handleBadRequestError(res, {
          message: 'Не верные данные для входа',
          name: 'badRequest',
        });

        return;
      }

      const isPasswordMatch = await bcrypt.compare(
        password,
        currentUser?.password as string
      );

      if (!isPasswordMatch) {
        handleBadRequestError(res, {
          message: 'Не верные данные для входа',
          name: 'badRequest',
        });
      }

      const accessToken = jwt.sign(
        { userId: currentUser.id },
        JWT_ACCESS_SECRET as string,
        {
          expiresIn: JWT_ACCESS_EXPIRED_TIME,
        }
      );

      const response = {
        accessToken,
        username: currentUser?.username,
      };

      res.send(response);
    } catch (err) {
      console.log(err);
      handleInternalServerError(res, err as Error);
    }
  };
}
