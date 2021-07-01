import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  titleSection: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      background:
        'url("/assets/infoTables/infoTablesMain.jpg") no-repeat center center',
      backgroundSize: 'cover',
      content: '""',
      height: '100%',
      left: 0,
      position: 'fixed',
      top: 0,
      width: '100%',
      willChange: 'transform',
      zIndex: -1,
    },
  },
  title: {
    margin: '0 auto',
    textAlign: 'center',
    fontWeight: 400,
    color: '#fff',
  },
}));
