import { useCallback, useMemo } from 'react';
import Input from 'components/fields/Input';
import DateMultiPicker from 'components/fields/DateMultiPicker';
import { INPUT_MAPPINGS, INPUT_MAPPINGS_KEYS } from '../../../constants';
import { UseInputArgsType } from '../types';

export const useInput = ({
  type,
  value,
  onValueChange,
  onValueRangeChange,
  className,
}: UseInputArgsType) => {
  const matchData = useMemo(
    () =>
      ({
        ...INPUT_MAPPINGS[type],
        variant: 'outlined',
        className,
      } as const),
    [className, type]
  );

  const renderInput = useCallback(() => {
    switch (type) {
      case INPUT_MAPPINGS_KEYS.INPUT:
        return (
          <Input
            {...matchData}
            value={value as string}
            onChange={onValueChange}
          />
        );
      case INPUT_MAPPINGS_KEYS.DATE:
        return (
          <DateMultiPicker
            {...matchData}
            value={value as Date[] | undefined}
            onChange={onValueRangeChange}
          />
        );

      default:
        return null;
    }
  }, [matchData, onValueChange, onValueRangeChange, type, value]);

  return { renderInput };
};
