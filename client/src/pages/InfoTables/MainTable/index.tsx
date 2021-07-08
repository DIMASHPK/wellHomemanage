import React, { memo, useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TabsPanel from 'components/TabsPanel';
import { tabItemType } from 'components/TabsPanel/types';
import { useStyles } from './styles';
import Tables from './Tables';

const MainTable: React.FC = memo(() => {
  const tabs: tabItemType[] = [
    { label: 'Квартиры', value: 0 },
    { label: 'Дома', value: 1 },
    { label: 'Эксклюзив', value: 2 },
  ];

  const [value, setValue] = useState(tabs[0].value);

  const handleChange = useCallback((e, value) => setValue(value), []);

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
              value={value}
              tabs={tabs}
              onChange={handleChange}
              classes={{
                wrapper,
                root,
                tabsRoot,
              }}
            />
            <Button className={addButton}>+ Добавить</Button>
          </div>
          <Tables value={value} />
        </div>
      </Container>
    </section>
  );
});

MainTable.displayName = 'MainTable';

export default MainTable;
