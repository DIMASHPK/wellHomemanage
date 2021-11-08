import { GetTableColumnsType } from './types';

export const getTableColumns: GetTableColumnsType = ({ classes }) => [
  { className: classes.idCell, id: 21, value: 'id', title: '№' },
  { className: classes.addressCell, id: 22, value: 'address', title: 'адрес' },
  {
    className: classes.buildingMaterialCell,
    id: 23,
    value: 'buildingMaterial',
    title: 'материал постройки',
  },
  { className: classes.areaCell, id: 24, value: 'area', title: 'площадь' },
  {
    className: classes.landAreaCell,
    id: 25,
    value: 'landArea',
    title: 'площадь участка',
  },
  {
    className: classes.quantityOfRoomsCell,
    id: 26,
    value: 'quantityOfRooms',
    title: 'количество комнат',
  },
  {
    className: classes.descriptionCell,
    id: 27,
    value: 'description',
    title: 'описание',
  },
  { className: classes.priceCell, id: 28, value: 'price', title: 'цена' },
  {
    className: classes.pricePerMeterCell,
    id: 29,
    value: 'pricePerMeter',
    title: 'цена 1м',
  },
  {
    className: classes.commissionCell,
    id: 30,
    value: 'commission',
    title: 'коммисия',
  },
  { className: classes.numberCell, id: 31, value: 'number', title: 'контакт' },
  {
    className: classes.whoGaveCell,
    id: 32,
    value: 'whoGave',
    title: 'от кого',
  },
  {
    className: classes.stateOfLidCell,
    id: 33,
    value: 'stateOfLid',
    title: 'состаяние лида',
  },
  {
    className: classes.descriptionOfClientCell,
    id: 34,
    value: 'descriptionOfClient',
    title: 'характеристика клиента',
  },
  {
    className: classes.managerOfObjectCell,
    id: 35,
    value: 'managerOfObject',
    title: 'куратор объекта',
  },
  {
    className: classes.dateOfStartAdCell,
    id: 36,
    value: 'dateOfStartAd',
    title: 'начало рекламы',
  },
  {
    className: classes.dateOfSoldCell,
    id: 37,
    value: 'dateOfSold',
    title: 'дата продажи',
  },
  {
    className: classes.soldPriceCell,
    id: 38,
    value: 'soldPrice',
    title: 'цена продажи',
  },
];
