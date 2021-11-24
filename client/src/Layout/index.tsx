import React from 'react';
import CommonDialog from '../components/Dialog';
import { useStyles } from './styles';
import AuthForm from './AuthForm';

const Layout: React.FC = ({ children }) => {
  const { modalContainer, titleClass } = useStyles();

  return (
    <>
      <CommonDialog
        classes={{ modalContainer, titleClass }}
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
