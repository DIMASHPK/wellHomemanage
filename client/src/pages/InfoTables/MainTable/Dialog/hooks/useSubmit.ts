import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { TAB_NAMES } from 'constants/tabs';
import { FormInput, UseSubmitReturnType } from '../types';

export const useSubmit = (): UseSubmitReturnType => {
  const handleSubmit: SubmitHandler<FormInput> = useCallback(values => {
    const { tableForm } = values;

    const flats = tableForm.filter(({ type }) => type === TAB_NAMES.FLATS);
    const houses = tableForm.filter(({ type }) => type === TAB_NAMES.HOUSES);
    const exclusives = tableForm.filter(
      ({ type }) => type === TAB_NAMES.EXCLUSIVES
    );

    console.log({ flats, houses, exclusives });
  }, []);

  return { handleSubmit };
};
