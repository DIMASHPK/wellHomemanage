import React, { memo, useCallback, useState } from 'react';
import { TabsProps, Typography } from '@material-ui/core';
import TabsPanelCommon from 'components/TabsPanel';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import { useAppSelector } from 'redux/hooks';
import ResponsiveButton from 'components/ResponsiveButton';
import { tabs } from '../constants';
import AddButton from './AddButton';
import { useStyles } from './styles';
import { TabsPanelTypes } from './types';
import { EDIT_DATA_MAPPING } from './constants';
import Filters from './Filters';
import { useFilters } from './Filters/hooks/useFilters';
import RemoveConfirm from './RemoveConfirm';

const TabsPanel: React.FC<TabsPanelTypes> = memo(props => {
  const { selectedTab, onChange, onDialogData } = props;

  const { title, getCount } = EDIT_DATA_MAPPING[selectedTab?.name];

  const filtersData = useFilters({ selectedTab });

  const state = useAppSelector(state => state);

  const [openRemove, setOpenRemove] = useState(false);

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
    buttonIcon,
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

  const handleOpen = () => setOpenRemove(true);

  const handleClose = useCallback(() => setOpenRemove(false), []);

  return (
    <>
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
            <ResponsiveButton
              variant="contained"
              icon={<EditIcon className={buttonIcon} />}
              className={button}
              size="small"
              onClick={handleEdit}
            >
              Редактировать
            </ResponsiveButton>
            <ResponsiveButton
              variant="contained"
              className={button}
              color="secondary"
              icon={<DeleteIcon className={buttonIcon} />}
              size="small"
              onClick={handleOpen}
            >
              Удалить
            </ResponsiveButton>
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
      <RemoveConfirm
        open={openRemove}
        onClose={handleClose}
        selectedTabName={selectedTab.name}
      />
    </>
  );
});

TabsPanel.displayName = 'TabsPanel';

export default TabsPanel;
