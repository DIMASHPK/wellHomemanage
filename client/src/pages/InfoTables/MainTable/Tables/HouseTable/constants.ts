import { HeadColumnType } from 'pages/InfoTables/common/Table/types';

export const TABLE_COLUMNS: Omit<HeadColumnType, 'onClick'>[] = [
  { id: 21, value: 'id', title: '№' },
  { id: 22, value: 'address', title: 'адрес' },
  { id: 23, value: 'buildingMaterial', title: 'материал постройки' },
  { id: 24, value: 'area', title: 'площадь' },
  { id: 25, value: 'landArea', title: 'площадь участка' },
  { id: 26, value: 'quantityOfRooms', title: 'количество комнат' },
  { id: 27, value: 'description', title: 'описание' },
  { id: 28, value: 'price', title: 'цена' },
  { id: 29, value: 'pricePerMeter', title: 'цена 1м' },
  { id: 30, value: 'commission', title: 'коммисия' },
  { id: 31, value: 'number', title: 'контакт' },
  { id: 32, value: 'whoGave', title: 'от кого' },
  { id: 33, value: 'stateOfLid', title: 'состаяние лида' },
  { id: 34, value: 'descriptionOfClient', title: 'характеристика клиента' },
  { id: 35, value: 'managerOfObject', title: 'куратор объекта' },
  { id: 36, value: 'dateOfStartAd', title: 'начало рекламы' },
  { id: 37, value: 'dateOfSold', title: 'дата продажи' },
  { id: 38, value: 'soldPrice', title: 'цена продажи' },
];
