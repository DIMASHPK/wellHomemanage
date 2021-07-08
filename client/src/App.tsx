import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import Routes from './Routes';
import { store } from './redux';
import { theme } from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Header />
      <Routes />
      <CssBaseline />
    </Provider>
  </ThemeProvider>
);

export default App;
