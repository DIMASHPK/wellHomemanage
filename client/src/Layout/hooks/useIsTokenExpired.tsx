import { useAppSelector } from 'redux/hooks';

export const useIsTokenExpired = () => {
  const token = useAppSelector(
    ({
      user: {
        data: { accessToken },
      },
    }) => accessToken
  );

  return !token;
};
