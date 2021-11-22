import { TAB_NAMES } from 'constants/tabs';
import { UnionToIntersectionType } from 'constants/types';
import { getNullFromEmptyArrray } from 'utils/arrays';
import { formatToISOString, formatWithCheck } from 'utils/dates';
import { getNumberFromString, getNullableNumbers } from 'utils/numbers';
import { getNullFromEmptyString } from 'utils/strings';
import {
  INITIAL_VALUES_MAPPING,
  SUBMIT_KEYS,
  VALUES_ARRAY_NAME,
} from './constants';
import {
  GetDefaultValuesArgsType,
  GetDefaultValuesReturnType,
  TransformFlatsDataType,
  TransformHousesDataType,
  TransformExclusivesDataType,
  TableFormType,
  GetFormattedDateType,
  GetFormattedDatesArrayType,
  GetSubmitKeyType,
} from './types';

export const getDefaultValues = ({
  state,
  type,
}: GetDefaultValuesArgsType): GetDefaultValuesReturnType => {
  const { selectedCells, ...restData } = state[type];

  const restDataIntersection = restData as UnionToIntersectionType<
    typeof restData
  >;

  const filteredArray = restDataIntersection[type]
    .map(item => ({
      ...item,
      type,
    }))
    .filter(({ id }) =>
      selectedCells.includes(id)
    ) as GetDefaultValuesReturnType['tableForm'];

  return {
    [VALUES_ARRAY_NAME]: filteredArray,
  };
};

export const flatPredicate = (
  item: TableFormType
): item is typeof INITIAL_VALUES_MAPPING.flats => item.type === TAB_NAMES.FLATS;

export const housePredicate = (
  item: TableFormType
): item is typeof INITIAL_VALUES_MAPPING.houses =>
  item.type === TAB_NAMES.HOUSES;

export const exclusivePredicate = (
  item: TableFormType
): item is typeof INITIAL_VALUES_MAPPING.exclusives =>
  item.type === TAB_NAMES.EXCLUSIVES;

const getFormattedDate: GetFormattedDateType = date =>
  date && getNullFromEmptyString(formatWithCheck(date, formatToISOString));

const getFormattedDatesArray: GetFormattedDatesArrayType = arr =>
  getNullFromEmptyArrray(
    arr?.map(item => formatWithCheck(item, formatToISOString))
  );

export const transformFlatsData: TransformFlatsDataType = item => {
  const {
    dateOfStartAd,
    dateOfSold,
    floor,
    numberOfStoreys,
    quantityOfRooms,
    area,
    price,
    pricePerMeter,
    commission,
    soldPrice,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type,
    ...rest
  } = item;

  return {
    ...rest,
    floor: getNumberFromString(floor),
    numberOfStoreys: getNumberFromString(numberOfStoreys),
    quantityOfRooms: getNumberFromString(quantityOfRooms),
    area: getNumberFromString(area),
    price: getNumberFromString(price),
    pricePerMeter: getNumberFromString(pricePerMeter),
    commission: getNumberFromString(commission),
    soldPrice: getNullableNumbers(soldPrice),
    dateOfStartAd: getFormattedDate(dateOfStartAd),
    dateOfSold: getFormattedDate(dateOfSold),
  };
};

export const transformHouseData: TransformHousesDataType = item => {
  const {
    dateOfStartAd,
    dateOfSold,
    area,
    landArea,
    quantityOfRooms,
    price,
    pricePerMeter,
    commission,
    soldPrice,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type,
    ...rest
  } = item;

  return {
    ...rest,
    landArea: getNumberFromString(landArea),
    area: getNumberFromString(area),
    quantityOfRooms: getNumberFromString(quantityOfRooms),
    price: getNumberFromString(price),
    pricePerMeter: getNumberFromString(pricePerMeter),
    commission: getNumberFromString(commission),
    soldPrice: getNullableNumbers(soldPrice),
    dateOfStartAd: getFormattedDate(dateOfStartAd),
    dateOfSold: getFormattedDate(dateOfSold),
  };
};

export const transformExclusivesData: TransformExclusivesDataType = item => {
  const {
    floor,
    area,
    reservePrice,
    startPrice,
    endPrice,
    incomingCalls,
    incomingSocial,
    signUpForView,
    visited,
    offers,
    commission,
    adCost,
    adStart,
    deal,
    deposit,
    preSalePrepare,
    watchingDays,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type,
    ...rest
  } = item;

  return {
    ...rest,
    floor: getNumberFromString(floor),
    area: getNumberFromString(area),
    reservePrice: getNumberFromString(reservePrice),
    startPrice: getNumberFromString(startPrice),
    endPrice: getNullableNumbers(endPrice),
    incomingCalls: getNullableNumbers(incomingCalls),
    incomingSocial: getNullableNumbers(incomingSocial),
    signUpForView: getNullableNumbers(signUpForView),
    visited: getNullableNumbers(visited),
    offers: getNullableNumbers(offers),
    commission: getNumberFromString(commission),
    adCost: getNullableNumbers(adCost),
    deal: getFormattedDate(deal),
    adStart: getFormattedDate(adStart),
    deposit: getFormattedDate(deposit),
    preSalePrepare: getFormattedDatesArray(preSalePrepare),
    watchingDays: getFormattedDatesArray(watchingDays),
  };
};

export const getSubmitKey: GetSubmitKeyType = edit =>
  edit ? SUBMIT_KEYS.EDIT : SUBMIT_KEYS.CREATE;
