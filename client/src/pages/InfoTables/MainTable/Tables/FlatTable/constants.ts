import { HeadColumnType } from 'pages/InfoTables/common/Table/types';

export const TABLE_COLUMNS: Omit<HeadColumnType, 'onClick'>[] = [
  { id: 1, value: 'id', title: '№' },
  { id: 2, value: 'address', title: 'адрес' },
  { id: 3, value: 'floor', title: 'этаж' },
  { id: 4, value: 'numberOfStoreys', title: 'этажность' },
  { id: 5, value: 'quantityOfRooms', title: 'количество комнат' },
  { id: 6, value: 'buildingMaterial', title: 'материал постройки' },
  { id: 7, value: 'typeOfHouse', title: 'тип' },
  { id: 8, value: 'area', title: 'площадь' },
  { id: 9, value: 'description', title: 'описание' },
  { id: 10, value: 'price', title: 'цена' },
  { id: 11, value: 'pricePerMeter', title: 'цена 1м' },
  { id: 12, value: 'commission', title: 'коммисия' },
  { id: 13, value: 'number', title: 'контакт' },
  { id: 14, value: 'whoGave', title: 'от кого' },
  { id: 15, value: 'stateOfLid', title: 'состаяние лида' },
  { id: 16, value: 'descriptionOfClient', title: 'характеристика клиента' },
  { id: 17, value: 'managerOfObject', title: 'куратор объекта' },
  { id: 18, value: 'dateOfStartAd', title: 'начало рекламы' },
  { id: 19, value: 'dateOfSold', title: 'дата продажи' },
  { id: 20, value: 'soldPrice', title: 'цена продажи' },
];
