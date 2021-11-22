import ListItem from '@material-ui/core/ListItem';
import React, { memo, useCallback, useMemo } from 'react';
import Checkbox from 'components/fields/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import { useStyles } from './styles';
import type { OptionType } from './types';

const Option: React.FC<OptionType> = memo(props => {
  const {
    title,
    pathForHiddenColumnsState,
    hiddenColumns,
    onHideColumn,
    value,
  } = props;

  const { listItem, label, root } = useStyles();

  const handleChange = useCallback(
    () =>
      onHideColumn({
        columnName: value,
        typeName: pathForHiddenColumnsState,
      }),
    [onHideColumn, pathForHiddenColumnsState, value]
  );

  const disabled = useMemo(
    () =>
      Object.values(hiddenColumns[pathForHiddenColumnsState]).filter(
        item => !item
      ).length < 2,
    [hiddenColumns, pathForHiddenColumnsState]
  );

  const control = useMemo(
    () => (
      <Checkbox
        color="primary"
        checked={!hiddenColumns[pathForHiddenColumnsState][value]}
        onChange={handleChange}
        disabled={!hiddenColumns[pathForHiddenColumnsState][value] && disabled}
        classes={{ root }}
      />
    ),
    [
      disabled,
      handleChange,
      hiddenColumns,
      pathForHiddenColumnsState,
      root,
      value,
    ]
  );

  return (
    <ListItem className={listItem}>
      <FormControlLabel classes={{ label }} control={control} label={title} />
    </ListItem>
  );
});

Option.displayName = 'Option';

export default Option;
