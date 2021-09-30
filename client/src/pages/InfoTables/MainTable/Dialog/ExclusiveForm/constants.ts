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
    type: 'number',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'area',
    label: 'Площадь',
    type: 'number',
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
    type: 'number',
    label: 'Цена Резервная',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'startPrice',
    type: 'number',
    label: 'Цена Стартовая',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'endPrice',
    type: 'number',
    label: 'Цена Конечная',
    component: Input,
  },
  {
    name: 'preSalePrepare',
    label: 'Предпродажная Подготовка',
    component: PickerWithForm,
  },
  { name: 'adStart', label: 'Старт Рекламы', component: DatePicker },
  {
    name: 'incomingCalls',
    type: 'number',
    label: 'Входящие Звонки',
    component: Input,
  },
  {
    name: 'incomingSocial',
    type: 'number',
    label: 'Входящие Соцсети',
    component: Input,
  },
  {
    name: 'crmNumberAndDescriptionOfClient',
    label: '№ в Срм Анкета Клиента',
    component: Input,
    multiline: true,
  },
  { name: 'watchingDays', label: 'Дни Показов', component: PickerWithForm },
  {
    name: 'signUpForView',
    type: 'number',
    label: 'Записались На Просмотр',
    component: Input,
  },
  { name: 'visited', type: 'number', label: 'Пришли', component: Input },
  { name: 'offers', type: 'number', label: 'Оферты К-во', component: Input },
  { name: 'deposit', label: 'Задаток', component: DatePicker },
  { name: 'deal', label: 'Сделка', component: DatePicker },
  {
    name: 'commission',
    label: 'Комиссия',
    type: 'number',
    component: Input,
    rules: {
      required: 'Заполните поле',
      min: { value: 1, message: 'введите число большое 0' },
    },
  },
  {
    name: 'adCost',
    type: 'number',
    label: 'Расход Рекламы(грн.)',
    component: Input,
  },
] as const;
