import { DialogInput as Input } from 'components/fields/Input/Form';
import DatePicker from 'components/fields/DatePicker/Form';

export const INPUT_FIELDS = [
  {
    name: 'address',
    label: 'Адресс',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    name: 'stateOfLid',
    label: 'Состояние Лида',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Характеристика Клиента',
    name: 'descriptionOfClient',
    multiline: true,
    component: Input,
  },
  {
    label: 'Куратор Объекта',
    name: 'managerOfObject',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Цена Продажи',
    type: 'number',
    name: 'soldPrice',
    component: Input,
  },
  {
    label: 'Количество Комнат',
    name: 'quantityOfRooms',
    type: 'number',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Контакт',
    name: 'number',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Коммисия',
    name: 'commission',
    type: 'number',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Цена 1м',
    type: 'number',
    name: 'pricePerMeter',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Цена',
    type: 'number',
    name: 'price',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Описание',
    name: 'description',
    multiline: true,
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Тип',
    name: 'typeOfHouse',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Этажность',
    type: 'number',
    name: 'numberOfStoreys',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Этаж',
    type: 'number',
    name: 'floor',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Площадь',
    type: 'number',
    name: 'area',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Материал Постройки',
    name: 'buildingMaterial',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'От Кого',
    name: 'whoGave',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  { label: 'Дата Продажи', name: 'dateOfSold', component: DatePicker },
  { label: 'Начало Рекламы', name: 'dateOfStartAd', component: DatePicker },
] as const;
