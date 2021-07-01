import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Routes from './Routes';

const App: React.FC = () => (
  <>
    <Header />
    <Routes />
    <CssBaseline />
  </>
);

export default App;
