import { useCallback } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addFlats } from 'redux/flats/thunks';
import { addHouses } from 'redux/houses/thunks';
import { addExclusives } from 'redux/exclusives/thunks';
import { FormInput, UseSubmitReturnType, UseSubmitArgsType } from '../types';
import {
  exclusivePredicate,
  flatPredicate,
  housePredicate,
  transformExclusivesData,
  transformFlatsData,
  transformHouseData,
} from '../helpers';

export const useSubmit = ({
  onClose,
}: UseSubmitArgsType): UseSubmitReturnType => {
  const dispatch = useDispatch();

  const handleSubmit: SubmitHandler<FormInput> = useCallback(
    async values => {
      const { tableForm } = values;

      const flats = tableForm.filter(flatPredicate).map(transformFlatsData);
      const houses = tableForm.filter(housePredicate).map(transformHouseData);
      const exclusives = tableForm
        .filter(exclusivePredicate)
        .map(transformExclusivesData);

      try {
        await Promise.allSettled([
          dispatch(addFlats({ flats })),
          dispatch(addHouses({ houses })),
          dispatch(addExclusives({ exclusives })),
        ]);
      } catch (e) {
        console.log(e);
      } finally {
        onClose();
      }
    },
    [dispatch, onClose]
  );

  return { handleSubmit };
};
