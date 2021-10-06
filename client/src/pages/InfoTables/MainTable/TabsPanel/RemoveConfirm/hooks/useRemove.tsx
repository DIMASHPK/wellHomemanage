import { TAB_NAMES } from 'constants/tabs';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UseRemoveArgsType, UseRemoveReturnType } from '../types';

export const useRemove = ({
  selectedTabName,
  onClose,
}: UseRemoveArgsType): UseRemoveReturnType => {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();

  const handleRemove = useCallback(async () => {
    const removeFuncMapping = {
      [TAB_NAMES.FLATS]: () => null,
      [TAB_NAMES.HOUSES]: () => null,
      [TAB_NAMES.EXCLUSIVES]: () => null,
    };

    setDisabled(true);

    await dispatch(removeFuncMapping[selectedTabName]());

    onClose();
    setDisabled(false);
  }, [dispatch, onClose, selectedTabName]);

  return { handleRemove, disabled };
};
