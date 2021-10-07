import { useCallback, useMemo } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addFlats, updateFlats } from 'redux/flats/thunks';
import { addHouses, updateHouses } from 'redux/houses/thunks';
import { addExclusives, updateExclusives } from 'redux/exclusives/thunks';
import { TAB_NAMES } from 'constants/tabs';
import {
  getSubmitKey,
  exclusivePredicate,
  flatPredicate,
  housePredicate,
  transformExclusivesData,
  transformFlatsData,
  transformHouseData,
} from '../helpers';
import {
  FormInput,
  UseSubmitReturnType,
  UseSubmitArgsType,
  HandleCreateType,
} from '../types';

import { SUBMIT_KEYS } from '../constants';

export const useSubmit = ({
  onClose,
  edit = false,
  type,
}: UseSubmitArgsType): UseSubmitReturnType => {
  const dispatch = useDispatch();

  const handleCreate: HandleCreateType = useCallback(
    async ({ flats, houses, exclusives }) => {
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

  const handleUpdate = useCallback(
    async ({ flats, houses, exclusives }) => {
      const thunksMapping = {
        [TAB_NAMES.FLATS]: () => dispatch(updateFlats({ flats })),
        [TAB_NAMES.HOUSES]: () => dispatch(updateHouses({ houses })),
        [TAB_NAMES.EXCLUSIVES]: () =>
          dispatch(updateExclusives({ exclusives })),
      };

      try {
        await thunksMapping[type]();
      } catch (e) {
        console.log(e);
      } finally {
        onClose();
      }
    },
    [dispatch, onClose, type]
  );

  const currentSubmitHendler = useMemo(() => {
    const submitMapping = {
      [SUBMIT_KEYS.CREATE]: handleCreate,
      [SUBMIT_KEYS.EDIT]: handleUpdate,
    };

    return submitMapping[getSubmitKey(edit)];
  }, [edit, handleCreate, handleUpdate]);

  const handleSubmit: SubmitHandler<FormInput> = useCallback(
    async values => {
      const { tableForm } = values;

      const flats = tableForm.filter(flatPredicate).map(transformFlatsData);
      const houses = tableForm.filter(housePredicate).map(transformHouseData);
      const exclusives = tableForm
        .filter(exclusivePredicate)
        .map(transformExclusivesData);

      await currentSubmitHendler({ flats, houses, exclusives });
    },
    [currentSubmitHendler]
  );

  return { handleSubmit };
};
