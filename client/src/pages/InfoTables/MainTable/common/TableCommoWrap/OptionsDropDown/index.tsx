import Popover from '@material-ui/core/Popover';
import React, { memo } from 'react';
import List from '@material-ui/core/List';
import type { OptionsDropDownType } from './types';
import Option from './Option';
import AllOption from './Option/AllOption';

const OptionsDropDown: React.FC<OptionsDropDownType> = memo(props => {
  const {
    headColumns,
    onClose,
    open,
    id,
    anchorEl,
    onHideColumn,
    hiddenColumns,
    pathForHiddenColumnsState,
    anchorReference = 'anchorEl',
  } = props;

  const options = headColumns.filter(({ canHide }) => canHide);

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorPosition={{ top: 0, left: 0 }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      anchorReference={anchorReference}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List>
        <AllOption
          title="Показать все"
          onHideColumn={onHideColumn}
          hiddenColumns={hiddenColumns}
          pathForHiddenColumnsState={pathForHiddenColumnsState}
        />
        {options.map(({ value, title, id }) => (
          <Option
            key={id}
            title={title}
            onHideColumn={onHideColumn}
            hiddenColumns={hiddenColumns}
            pathForHiddenColumnsState={pathForHiddenColumnsState}
            value={value as string}
          />
        ))}
      </List>
    </Popover>
  );
});

OptionsDropDown.displayName = 'OptionsDropDown';

export default OptionsDropDown;
