import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiType, GetAllArgs } from './types';

class Api implements ApiType {
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

  getAll = <T>(data: GetAllArgs): Promise<AxiosResponse<T>> => {
    const { path } = data;

    return this.axios.get(path);
  };
}

export default new Api();
