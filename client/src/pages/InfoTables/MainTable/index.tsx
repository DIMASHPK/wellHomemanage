import React, { memo, useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { getOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { TabsProps } from '@material-ui/core';
import { tabItemType } from 'components/TabsPanel/types';
import Dialog from './Dialog';
import { useStyles } from './styles';
import Tables from './Tables';
import { tabs } from './constants';
import TabsPanel from './TabsPanel';

const MainTable: React.FC = memo(() => {
  const [value, setValue] = useState<tabItemType>({ ...tabs[0] });

  const [dialogData, setDialogData] = useState({
    open: false,
    title: '',
    type: '' as getOptionalType<typeof TAB_NAMES>,
    edit: false,
  });

  const handleChange = useCallback((e, value) => setValue(tabs[value]), []);

  const { mainTable, mainTableTitle, contentContainer } = useStyles();

  const handleDialogData = useCallback(({ title, type, edit = false }) => {
    setDialogData({ open: true, title, type, edit });
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
          <TabsPanel
            selectedTab={value}
            onChange={handleChange as TabsProps['onChange']}
            onDialogData={handleDialogData}
          />
          <Tables value={value} />
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
