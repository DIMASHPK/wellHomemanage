import React, { useCallback, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useAppSelector } from 'redux/hooks';
import { useStyles } from './styles';
import LogoutItem from './LogoutItem';

const DropDownMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const token = useAppSelector(
    ({
      user: {
        data: { accessToken },
      },
    }) => accessToken
  );

  const { avatarButton, avatar } = useStyles();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      {token && (
        <>
          <IconButton className={avatarButton} onClick={handleOpen}>
            <Avatar className={avatar}>П</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <LogoutItem onClose={handleClose} />
          </Menu>
        </>
      )}
    </>
  );
};

export default DropDownMenu;
