import { GetTableColumnsType } from './types';

export const getTableColumns: GetTableColumnsType = ({ classes }) => [
  { id: 1, value: 'id', title: '№', className: classes.idCell },
  { id: 2, value: 'address', title: 'адрес', className: classes.addressCell },
  { id: 3, value: 'floor', title: 'этаж', className: classes.floorCell },
  {
    id: 4,
    value: 'numberOfStoreys',
    title: 'этажность',
    className: classes.numberOfStoreysCell,
  },
  {
    id: 5,
    value: 'quantityOfRooms',
    title: 'количество комнат',
    className: classes.quantityOfRoomsCell,
  },
  {
    id: 6,
    value: 'buildingMaterial',
    title: 'материал постройки',
    className: classes.buildingMaterialCell,
  },
  {
    id: 7,
    value: 'typeOfHouse',
    title: 'тип',
    className: classes.typeOfHouseCell,
  },
  { id: 8, value: 'area', title: 'площадь', className: classes.areaCell },
  {
    id: 9,
    value: 'description',
    title: 'описание',
    className: classes.descriptionCell,
  },
  { id: 10, value: 'price', title: 'цена', className: classes.priceCell },
  {
    id: 11,
    value: 'pricePerMeter',
    title: 'цена 1м',
    className: classes.pricePerMeterCell,
  },
  {
    id: 12,
    value: 'commission',
    title: 'коммисия',
    className: classes.commissionCell,
  },
  { id: 13, value: 'number', title: 'контакт', className: classes.numberCell },
  {
    id: 14,
    value: 'whoGave',
    title: 'от кого',
    className: classes.whoGaveCell,
  },
  {
    id: 15,
    value: 'stateOfLid',
    title: 'состаяние лида',
    className: classes.stateOfLidCell,
  },
  {
    id: 16,
    value: 'descriptionOfClient',
    title: 'характеристика клиента',
    className: classes.descriptionOfClientCell,
  },
  {
    id: 17,
    value: 'managerOfObject',
    title: 'куратор объекта',
    className: classes.managerOfObjectCell,
  },
  {
    id: 18,
    value: 'dateOfStartAd',
    title: 'начало рекламы',
    className: classes.dateOfStartAdCell,
  },
  {
    id: 19,
    value: 'dateOfSold',
    title: 'дата продажи',
    className: classes.dateOfSoldCell,
  },
  {
    id: 20,
    value: 'soldPrice',
    title: 'цена продажи',
    className: classes.soldPriceCell,
  },
];
