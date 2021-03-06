export const SORT_OPTIONS_FROM_CLIENT = {
  ASC: 'ASC_NULLS_LAST',
  DESC: 'DESC_NULLS_LAST',
} as const;

export const SORT_OPTIONS = {
  [SORT_OPTIONS_FROM_CLIENT.ASC]: 'ASC NULLS LAST',
  [SORT_OPTIONS_FROM_CLIENT.DESC]: 'DESC NULLS LAST',
} as const;

export const COND_OPTIONS = {
  AND: 'and',
  OR: 'or',
} as const;

export const FILTER_MAPPINGS = {
  EQ: 'eq',
  ILIKE: 'iLike',
  BETWEEN: 'between',
  RANGE_BETWEEN: 'rangeBetween',
} as const;

export const FILTER_COND_KEY = 'filter.cond' as const;
