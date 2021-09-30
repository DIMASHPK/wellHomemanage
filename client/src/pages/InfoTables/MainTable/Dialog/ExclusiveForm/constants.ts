import { DialogInput as Input } from 'components/fields/Input/Form';
import DatePicker from 'components/fields/DatePicker/Form';
import { DialogRangePicker as PickerWithForm } from 'components/fields/DateMultiPicker/Form';

export const INPUT_FIELDS = [
  {
    name: 'address',
    label: 'Адрес',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    name: 'typeOfHouse',
    label: 'Тип',
    component: Input,
    rules: { required: 'Заполните поле' },
  },
  {
    name: 'floor',
    label: 'Этаж',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'area',
    label: 'Площадь',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'description',
    label: 'Описание Объекта',
    component: Input,
    multiline: true,
    rules: { required: 'Заполните поле' },
  },
  {
    name: 'reservePrice',
    label: 'Цена Резервная',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'startPrice',
    label: 'Цена Стартовая',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  { name: 'endPrice', label: 'Цена Конечная', component: Input },
  {
    name: 'preSalePrepare',
    label: 'Предпродажная Подготовка',
    component: PickerWithForm,
  },
  { name: 'adStart', label: 'Старт Рекламы', component: DatePicker },
  { name: 'incomingCalls', label: 'Входящие Звонки', component: Input },
  { name: 'incomingSocial', label: 'Входящие Соцсети', component: Input },
  {
    name: 'crmNumberAndDescriptionOfClient',
    label: '№ в Срм Анкета Клиента',
    component: Input,
    multiline: true,
  },
  { name: 'watchingDays', label: 'Дни Показов', component: PickerWithForm },
  { name: 'signUpForView', label: 'Записались На Просмотр', component: Input },
  { name: 'visited', label: 'Пришли', component: Input },
  { name: 'offers', label: 'Оферты К-во', component: Input },
  { name: 'deposit', label: 'Задаток', component: DatePicker },
  { name: 'deal', label: 'Сделка', component: DatePicker },
  {
    name: 'commission',
    label: 'Комиссия',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  { name: 'adCost', label: 'Расход Рекламы(грн.)', component: Input },
] as const;
