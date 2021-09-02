export const INPUT_MAPPINGS_KEYS = {
  DATE: 'date',
  INPUT: 'input',
} as const;

export const INPUT_MAPPINGS = {
  [INPUT_MAPPINGS_KEYS.INPUT]: {
    label: 'Введите значение',
  },
  [INPUT_MAPPINGS_KEYS.DATE]: {
    label: 'Выбирите даты',
  },
} as const;
