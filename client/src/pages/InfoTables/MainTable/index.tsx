import React, { memo, useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TabsPanel from 'components/TabsPanel';
import { TabsProps } from '@material-ui/core';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import Dialog from './Dialog';
import { useStyles } from './styles';
import Tables from './Tables';
import { tabs } from './constants';
import AddButton from './AddButton';

const MainTable: React.FC = memo(() => {
  const [value, setValue] = useState({ ...tabs[0] });

  const [dialogData, setDialogData] = useState({
    open: false,
    title: '',
    type: '' as getOptionalType<typeof TAB_NAMES>,
  });

  const handleChange = useCallback((e, value) => setValue(tabs[value]), []);

  const {
    mainTable,
    mainTableTitle,
    wrapper,
    root,
    tabsRoot,
    tabsContainer,
    contentContainer,
  } = useStyles();

  const handleDialogData = useCallback(({ title, type }) => {
    setDialogData({ open: true, title, type });
  }, []);

  const handleCloseDialog = useCallback(() => {
    setDialogData(prevState => ({ ...prevState, open: false }));
  }, []);

  return (
    <section>
      <Container maxWidth="lg" className={mainTable}>
        <Typography className={mainTableTitle} variant="h2" component="h2">
          Manage table
        </Typography>
        <div className={contentContainer}>
          <div className={tabsContainer}>
            <TabsPanel
              value={value.value}
              tabs={tabs}
              onChange={handleChange as TabsProps['onChange']}
              classes={{
                wrapper,
                root,
                tabsRoot,
              }}
            />
            <AddButton onDialogData={handleDialogData} />
          </div>
          <Tables value={value.value} />
        </div>
      </Container>
      {dialogData.open && (
        <Dialog {...dialogData} onClose={handleCloseDialog} />
      )}
    </section>
  );
});

MainTable.displayName = 'MainTable';

export default MainTable;
