import { TAB_NAMES } from 'constants/tabs';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeHouses } from 'redux/houses/thunks';
import { removeFlats } from 'redux/flats/thunks';
import { removeExclusives } from 'redux/exclusives/thunks';
import { UseRemoveArgsType, UseRemoveReturnType } from '../types';

export const useRemove = ({
  selectedTabName,
  onClose,
}: UseRemoveArgsType): UseRemoveReturnType => {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleRemove = useCallback(async () => {
    const removeFuncMapping = {
      [TAB_NAMES.FLATS]: removeFlats,
      [TAB_NAMES.HOUSES]: removeHouses,
      [TAB_NAMES.EXCLUSIVES]: removeExclusives,
    };

    setDisabled(true);

    await dispatch(removeFuncMapping[selectedTabName]());

    onClose();
    setDisabled(false);
  }, [dispatch, onClose, selectedTabName]);

  return { handleRemove, disabled };
};
