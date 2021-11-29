import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { removeUserData } from 'redux/user/reducer';
import { removeLocalStorageValue } from 'utils/helpers';
import { LogoutItemType } from './types';

const LogoutItem: React.FC<LogoutItemType> = memo(props => {
  const { onClose } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    onClose();
    removeLocalStorageValue('accessToken');
    dispatch(removeUserData());
  };

  return <MenuItem onClick={handleClick}>Выйти</MenuItem>;
});

LogoutItem.displayName = 'LogoutItem';

export default LogoutItem;
