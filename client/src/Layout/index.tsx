import React from 'react';
import CommonDialog from '../components/Dialog';
import { useStyles } from './styles';
import AuthForm from './AuthForm';
import { useIsTokenExpired } from './hooks/useIsTokenExpired';

const Layout: React.FC = ({ children }) => {
  const { modalContainer, titleClass } = useStyles();

  const isUserAuthorized = useIsTokenExpired();

  return (
    <>
      <CommonDialog
        classes={{ modalContainer, titleClass }}
        open={isUserAuthorized}
        title="Авторизация"
        withCloseButton={false}
      >
        <AuthForm />
      </CommonDialog>
      {children}
    </>
  );
};

export default Layout;
