import Popover from '@material-ui/core/Popover/Popover';
import React, { memo, useMemo } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { tabs } from 'pages/InfoTables/MainTable/constants';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { CreatingPopoverType } from './types';
import { useStyles } from './styles';
import { tabItemType } from '../TabsPanel/types';

const CreatingPopover: React.FC<CreatingPopoverType> = memo(props => {
  const { id, anchorEl, onClose, onButtonClick } = props;

  const { list } = useStyles();

  const open = Boolean(anchorEl);
  const currentId = open ? id : undefined;

  const createActions = useMemo(() => Object.values(tabs), []);

  const handleButtonClick = (type: getOptionalType<typeof TAB_NAMES>) => {
    onButtonClick({ type });
    onClose();
  };

  const renderListItem = (item: tabItemType) => (
    <ListItem
      key={item.name}
      component={Button}
      onClick={() => handleButtonClick(item.name)}
    >
      {item.label}
    </ListItem>
  );

  return (
    <Popover
      id={currentId}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List className={list}>{createActions.map(renderListItem)}</List>
    </Popover>
  );
});

CreatingPopover.displayName = 'CreatingPopover';

export default CreatingPopover;
