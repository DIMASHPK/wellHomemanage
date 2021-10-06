import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { AddArgsType, GetAllArgs, RemoveArgsType } from './types';

class Api {
  private readonly baseUrl: string;

  private readonly axios: AxiosInstance;

  constructor() {
    this.baseUrl = process.env.REAC_APP_API_URL || 'http://localhost:7777';

    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getPathnameWithParameters = (data: GetAllArgs): string => {
    const { path, ...restData } = data;

    const url = new URL(`${this.baseUrl}/${path}`);

    Object.entries(restData).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );

    const { search, pathname } = url;

    return `${pathname}${search}`;
  };

  getAll = <T>(data: GetAllArgs): Promise<AxiosResponse<T>> => {
    const pathnameWithParameters = this.getPathnameWithParameters(data);

    return this.axios.get(pathnameWithParameters);
  };

  add = <T, R = T>(config: AddArgsType<T>): Promise<AxiosResponse<R>> => {
    const { path, data } = config;

    return this.axios.post<R>(path, data);
  };

  remove = (
    config: RemoveArgsType
  ): Promise<AxiosResponse<RemoveArgsType['data']>> => {
    const { data, path } = config;

    return this.axios.delete<RemoveArgsType['data']>(path, { data });
  };
}

export default new Api();
