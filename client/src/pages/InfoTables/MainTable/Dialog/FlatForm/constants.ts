import Input from 'components/fields/Input/Form';
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
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Куратор Объекта',
    name: 'managerOfObject',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  { label: 'Цена Продажи', name: 'soldPrice', component: Input },
  {
    label: 'Количество Комнат',
    name: 'quantityOfRooms',
    component: Input,
    rules: { required: 'Заполните поле' },
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
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Цена 1м',
    name: 'pricePerMeter',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Цена',
    name: 'price',
    component: Input,
    rules: { required: 'Заполните поле' },
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
    name: 'numberOfStoreys',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Этаж',
    name: 'floor',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    label: 'Площадь',
    name: 'area',
    component: Input,
    rules: { required: 'Заполните поле' },
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
