import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  AddArgsType,
  GetAllArgs,
  RemoveArgsType,
  UpdateArgsType,
} from './types';

class Api {
  private readonly baseUrl: string;

  private readonly axios: AxiosInstance;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:7777';

    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getPathnameWithParameters = (data: GetAllArgs): string => {
    const { path, filters, ...restData } = data;

    const url = new URL(`${this.baseUrl}/${path}`);

    Object.entries(restData).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );

    if (filters?.length) {
      filters.forEach(item => {
        const { name, value } = item;
        url.searchParams.append(name, value);
      });
    }

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

  update = <T, R = T>(config: UpdateArgsType<T>): Promise<AxiosResponse<R>> => {
    const { path, data } = config;

    return this.axios.put<R>(path, data);
  };
}

export default new Api();
