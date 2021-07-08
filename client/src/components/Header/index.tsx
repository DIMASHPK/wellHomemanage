import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

const Header: React.FC = () => {
  const styles = useStyles();

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" component="p" className={styles.title}>
          Well Home
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
