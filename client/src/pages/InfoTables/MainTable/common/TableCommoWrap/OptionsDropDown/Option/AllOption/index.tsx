import ListItem from '@material-ui/core/ListItem';
import React, { memo, useCallback, useMemo } from 'react';
import Checkbox from 'components/fields/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import { useStyles } from '../styles';
import type { AllOptionType } from './types';

const AllOption: React.FC<AllOptionType> = memo(props => {
  const { title, pathForHiddenColumnsState, hiddenColumns, onHideColumn } =
    props;

  const { listItem, label, root } = useStyles();

  const handleChange = useCallback(
    () =>
      onHideColumn({
        typeName: pathForHiddenColumnsState,
        columnName: 'all',
      }),
    [onHideColumn, pathForHiddenColumnsState]
  );

  const isChecked = useMemo(
    () =>
      Object.values(hiddenColumns[pathForHiddenColumnsState]).every(
        item => !item
      ),
    [hiddenColumns, pathForHiddenColumnsState]
  );

  const control = useMemo(
    () => (
      <Checkbox
        color="primary"
        checked={isChecked}
        onChange={handleChange}
        classes={{ root }}
      />
    ),
    [handleChange, isChecked, root]
  );

  return (
    <ListItem className={listItem}>
      <FormControlLabel classes={{ label }} control={control} label={title} />
    </ListItem>
  );
});

AllOption.displayName = 'AllOption';

export default AllOption;
