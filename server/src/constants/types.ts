import { Request } from 'express';
import { SORT_OPTIONS_FROM_CLIENT } from './index';

export type GetOptionalType<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type FiltersType = {
  [x: string]: string;
};

export type CommonRequest<
  P = Request['params'],
  ResBody = any,
  ReqBody = any,
  ReqQuery = Request['query']
> = Request<P, ResBody, ReqBody, ReqQuery>;

export interface CommonQueryType {
  [x: string]: string;
  orderOption: GetOptionalType<typeof SORT_OPTIONS_FROM_CLIENT>;
}

export type RequestWithTypedQuery<Q = CommonQueryType, B = any> = CommonRequest<
  Request['params'],
  B,
  unknown,
  Q
>;

export type RequestWithTypedBody<B = any> = CommonRequest<
  Request['params'],
  B,
  B,
  any
>;
