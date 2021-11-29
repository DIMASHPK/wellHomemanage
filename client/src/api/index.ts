import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { handleUnauthorizedIntersect } from 'utils/api';
import { getLocalStorageValue } from 'utils/helpers';
import {
  AddArgsType,
  GetAllArgs,
  RemoveArgsType,
  UpdateArgsType,
} from './types';
import { SERVER_ERROR_STATUSES } from './constants';

class Api {
  private readonly baseUrl: string;

  private readonly _axios: AxiosInstance;

  private readonly currentToken: string | null;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:7777';

    this._axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.currentToken = getLocalStorageValue('accessToken');

    if (this.currentToken) {
      this.addNewHeaders({ authorization: `Bearer ${this.currentToken}` });
    }

    this.handleInterceptors();
  }

  get axios() {
    return this._axios;
  }

  private handleInterceptors = () => {
    this.axios.interceptors.response.use(
      response => response,
      error => {
        const { status, data } = error.response;

        if (status === SERVER_ERROR_STATUSES.UNAUTHORIZED) {
          handleUnauthorizedIntersect();
        }

        toast.error(data?.message);
        return error;
      }
    );
  };

  addNewHeaders = (headers: { [key: string]: string }) => {
    Object.entries(headers).forEach(
      ([key, value]) => (this.axios.defaults.headers.common[key] = value)
    );
  };

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

  get = <T>(data: GetAllArgs): Promise<AxiosResponse<T>> => {
    const pathnameWithParameters = this.getPathnameWithParameters(data);

    return this.axios.get(pathnameWithParameters);
  };

  post = <T, R = T>(config: AddArgsType<T>): Promise<AxiosResponse<R>> => {
    const { path, data } = config;

    return this.axios.post<R>(path, data);
  };

  delete = (
    config: RemoveArgsType
  ): Promise<AxiosResponse<RemoveArgsType['data']>> => {
    const { data, path } = config;

    return this.axios.delete<RemoveArgsType['data']>(path, { data });
  };

  put = <T, R = T>(config: UpdateArgsType<T>): Promise<AxiosResponse<R>> => {
    const { path, data } = config;

    return this.axios.put<R>(path, data);
  };
}

export default new Api();
