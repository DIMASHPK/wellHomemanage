import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Header from './components/Header';
import Routes from './Routes';
import { store } from './redux';
import { theme } from './theme';
import 'moment/locale/ru';
import { LOCALES_MAP } from './constants/locales';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils} locale={LOCALES_MAP.RU}>
      <Provider store={store}>
        <Header />
        <Routes />
        <CssBaseline />
      </Provider>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default App;
