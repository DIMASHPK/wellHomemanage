import React, { memo, useCallback } from 'react';
import { TabsProps, Typography } from '@material-ui/core';
import TabsPanelCommon from 'components/TabsPanel';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import { useAppSelector } from 'redux/hooks';
import { tabs } from '../constants';
import AddButton from './AddButton';
import { useStyles } from './styles';
import { TabsPanelTypes } from './types';
import { EDIT_DATA_MAPPING } from './constants';
import Filters from './Filters';
import { useFilters } from './Filters/hooks/useFilters';

const TabsPanel: React.FC<TabsPanelTypes> = memo(props => {
  const { selectedTab, onChange, onDialogData } = props;

  const { title, getCount } = EDIT_DATA_MAPPING[selectedTab?.name];

  const filtersData = useFilters({ selectedTab });

  const state = useAppSelector(state => state);

  const currentCount = getCount(state);

  const {
    root,
    tabsContainer,
    tabsRoot,
    wrapper,
    selectedContainer,
    selectedContainerTitle,
    selectedContainerActionContainer,
    button,
    opened,
    leftTabsContainer,
  } = useStyles();

  const handleEdit = useCallback(() => {
    onDialogData({
      edit: true,
      title: 'Редактировать запись',
      type: selectedTab.name,
    });
  }, [onDialogData, selectedTab.name]);

  return (
    <div className={tabsContainer}>
      <div
        className={clsx({
          [selectedContainer]: true,
          [opened]: Boolean(currentCount),
        })}
      >
        <Typography component="h3" className={selectedContainerTitle}>
          {title}
          {`(${currentCount})`}
        </Typography>
        <div className={selectedContainerActionContainer}>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            className={button}
            size="small"
            onClick={handleEdit}
          >
            Редактировать
          </Button>
          <Button
            variant="contained"
            className={button}
            color="secondary"
            startIcon={<DeleteIcon />}
            size="small"
          >
            Удалить
          </Button>
        </div>
      </div>
      <div className={leftTabsContainer}>
        <TabsPanelCommon
          value={selectedTab.value}
          tabs={tabs}
          onChange={onChange as TabsProps['onChange']}
          classes={{
            wrapper,
            root,
            tabsRoot,
          }}
        />
        <AddButton onDialogData={onDialogData} />
      </div>
      <div>
        <Filters selectedTabName={selectedTab.name} {...filtersData} />
      </div>
    </div>
  );
});

TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
