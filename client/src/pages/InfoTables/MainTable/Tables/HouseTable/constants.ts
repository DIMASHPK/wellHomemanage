import { HeadColumnType } from 'pages/InfoTables/common/Table/types';

export const TABLE_COLUMNS: Omit<HeadColumnType, 'onClick'>[] = [
  { id: 1, value: 'id', title: '№' },
  { id: 2, value: 'address', title: 'адрес' },
  { id: 3, value: 'buildingMaterial', title: 'материал постройки' },
  { id: 4, value: 'area', title: 'площадь' },
  { id: 5, value: 'landArea', title: 'площадь участка' },
  { id: 6, value: 'quantityOfRooms', title: 'количество комнат' },
  { id: 7, value: 'description', title: 'описание' },
  { id: 8, value: 'price', title: 'цена' },
  { id: 9, value: 'pricePerMeter', title: 'цена 1м' },
  { id: 10, value: 'commission', title: 'коммисия' },
  { id: 11, value: 'number', title: 'контакт' },
  { id: 12, value: 'whoGave', title: 'от кого' },
  { id: 13, value: 'stateOfLid', title: 'состаяние лида' },
  { id: 14, value: 'descriptionOfClient', title: 'характеристика клиента' },
  { id: 15, value: 'managerOfObject', title: 'куратор объекта' },
  { id: 16, value: 'dateOfStartAd', title: 'начало рекламы' },
  { id: 17, value: 'dateOfSold', title: 'дата продажи' },
  { id: 18, value: 'soldPrice', title: 'цена продажи' },
];
