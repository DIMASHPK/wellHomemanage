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
    name: 'buildingMaterial',
    label: 'Материал Постройки',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Площадь',
    name: 'area',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    label: 'Площадь Участка',
    name: 'landArea',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
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
    label: 'Описание',
    name: 'description',
    component: Input,
    multiline: true,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Цена',
    name: 'price',
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
    label: 'Коммисия',
    type: 'number',
    name: 'commission',
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
    label: 'От Кого',
    name: 'whoGave',
    multiline: true,
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Состаяние Лида',
    name: 'stateOfLid',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Характеристика Клиента',
    name: 'descriptionOfClient',
    component: Input,
    multiline: true,
  },
  {
    name: 'managerOfObject',
    label: 'Куратор Объекта',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  { label: 'Дата Продажи', name: 'dateOfSold', component: DatePicker },
  { label: 'Начало Рекламы', name: 'dateOfStartAd', component: DatePicker },
  {
    label: 'цена продажи',
    name: 'soldPrice',
    component: Input,
    type: 'number',
  },
] as const;
