import { useAppSelector } from 'redux/hooks';
import moment from 'moment';

export const useIsTokenExpired = () => {
  const tokenExpiredDate = useAppSelector(
    ({
      user: {
        data: { tokenExpiredDate },
      },
    }) => tokenExpiredDate
  );

  return !tokenExpiredDate || moment(tokenExpiredDate).isAfter(Date.now());
};
