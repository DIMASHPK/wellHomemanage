import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import DropDownMenu from './DropDownMenu';

const Header: React.FC = () => {
  const { appBar, title, headerWrapper } = useStyles();

  return (
    <AppBar position="fixed" className={appBar}>
      <Toolbar className={headerWrapper}>
        <Typography variant="h6" component="p" className={title}>
          Well Home
        </Typography>
        <DropDownMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
