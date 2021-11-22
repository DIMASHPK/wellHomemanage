import React from 'react';
import CommonDialog from '../components/Dialog';
import { useStyles } from './styles';
import AuthForm from './AuthForm';

const Layout: React.FC = ({ children }) => {
  const { modalContainer } = useStyles();

  return (
    <>
      <CommonDialog
        classes={{ modalContainer }}
        open
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
