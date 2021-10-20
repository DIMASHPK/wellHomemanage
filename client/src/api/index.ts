import { FiltersType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { FILTER_COND_ITEMS } from 'pages/InfoTables/MainTable/TabsPanel/Filters/constants';
import { checkIsDataValid, formatDateToSqlDate } from 'utils/dates';
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
    this.baseUrl = process.env.REAC_APP_API_URL || 'http://localhost:7777';

    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getTransformFilterDates = (dates: string[]): string[] =>
    dates.map(formatDateToSqlDate);

  getTransformedFilters = (filters: FiltersType): { [x: string]: string }[] => {
    const handleMap = ({
      name,
      value,
    }: FiltersType[number]): { [key: string]: string } => {
      if (Array.isArray(value) && value.every(checkIsDataValid)) {
        return {
          [`filter.${name}.between`]: this.getTransformFilterDates(value).toString(),
        };
      }

      if (!Array.isArray(value) && (parseFloat(value) || parseInt(value))) {
        return { [`filter.${name}.eq`]: value as string };
      }

      return { [`filter.${name}.like`]: value as string };
    };

    return [
      ...filters.map(handleMap),
      {
        'filter.cond':
          filters[filters.length - 1]?.cond || FILTER_COND_ITEMS.AND,
      },
    ];
  };

  getPathnameWithParameters = (data: GetAllArgs): string => {
    const { path, filters, ...restData } = data;

    const url = new URL(`${this.baseUrl}/${path}`);

    Object.entries(restData).forEach(([key, value]) =>
      url.searchParams.append(key, value)
    );

    if (filters) {
      this.getTransformedFilters(filters).forEach(item => {
        const [[key, value]] = Object.entries(item);
        url.searchParams.append(key, value);
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
