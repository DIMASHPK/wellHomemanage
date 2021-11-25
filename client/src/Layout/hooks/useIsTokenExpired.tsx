import { useAppSelector } from 'redux/hooks';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { setUserData } from 'redux/user/reducer';
import { removeLocalStorageValue } from 'utils/helpers';
import { useEffect } from 'react';

export const useIsTokenExpired = () => {
  const dispatch = useDispatch();

  const tokenExpiredDate = useAppSelector(
    ({
      user: {
        data: { expiresIn },
      },
    }) => expiresIn
  );

  const isTokenExpired =
    !tokenExpiredDate || moment(Date.now()).isAfter(tokenExpiredDate);

  useEffect(() => {
    if (!tokenExpiredDate || isTokenExpired) return;

    const timeoutValue = new Date(tokenExpiredDate).getTime() - Date.now();

    const tokenResetTimeout = setTimeout(() => {
      dispatch(
        setUserData({ accessToken: null, expiresIn: null, username: null })
      );
      removeLocalStorageValue('accessToken');
      removeLocalStorageValue('expiresIn');
      removeLocalStorageValue('username');
    }, timeoutValue);

    return () => {
      clearTimeout(tokenResetTimeout);
    };
  }, [dispatch, isTokenExpired, tokenExpiredDate]);

  return !tokenExpiredDate || moment(Date.now()).isAfter(tokenExpiredDate);
};
