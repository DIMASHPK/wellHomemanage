import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { TAB_NAMES } from 'constants/tabs';
import { formatToISOString } from 'utils/dates';
import { FlatType } from 'redux/flats/types';
import { HouseType } from 'redux/houses/types';
import { ExclusiveType } from 'redux/exclusive/types';
import {
  FormInput,
  UseSubmitFormArrayType,
  UseSubmitReturnType,
} from '../types';

export const useSubmit = (): UseSubmitReturnType => {
  const handleSubmit: SubmitHandler<FormInput> = useCallback(values => {
    const { tableForm } = values;

    const dataWithUpdatedDates = tableForm.map(item => ({
      ...item,
      ...((item.type === TAB_NAMES.HOUSES || item.type === TAB_NAMES.FLATS) && {
        dateOfStartAd: formatToISOString(item.dateOfStartAd),
        dateOfSold: formatToISOString(item.dateOfSold),
      }),
      ...(item.type === TAB_NAMES.EXCLUSIVES && {
        adStart: formatToISOString(item.adStart),
        deal: formatToISOString(item.deal),
        deposit: formatToISOString(item.deposit),
        preSalePrepare: item.preSalePrepare.map(formatToISOString),
        watchingDays: item.watchingDays.map(formatToISOString),
      }),
    }));

    const flats = dataWithUpdatedDates.filter(
      ({ type }) => type === TAB_NAMES.FLATS
    );
    const houses = dataWithUpdatedDates.filter(
      ({ type }) => type === TAB_NAMES.HOUSES
    );
    const exclusives = dataWithUpdatedDates.filter(
      ({ type }) => type === TAB_NAMES.EXCLUSIVES
    );

    console.log({ flats, houses, exclusives });
  }, []);

  return { handleSubmit };
};
