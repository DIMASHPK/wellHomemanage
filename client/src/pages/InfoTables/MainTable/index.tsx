import React, { memo, useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TabsPanel from 'components/TabsPanel';
import { TabsProps } from '@material-ui/core';
import { useStyles } from './styles';
import Tables from './Tables';
import { tabs } from './constants';

const MainTable: React.FC = memo(() => {
  const [value, setValue] = useState({ ...tabs[0] });

  const handleChange = useCallback((e, value) => setValue(tabs[value]), []);

  const {
    mainTable,
    mainTableTitle,
    wrapper,
    root,
    tabsRoot,
    tabsContainer,
    addButton,
    contentContainer,
  } = useStyles();

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
            <Button className={addButton}>+ Добавить</Button>
          </div>
          <Tables value={value.value} />
        </div>
      </Container>
    </section>
  );
});

MainTable.displayName = 'MainTable';

export default MainTable;
