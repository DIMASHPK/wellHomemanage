import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  titleSection: {
    height: '100vh',
    width: '100%',
    position: 'relative',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background:
      'url("/wellHomemanage/assets/infoTables/infoTablesMain.jpg") no-repeat center center',
    backgroundAttachment: 'fixed',
    willChange: 'background-attachment',
    backgroundSize: 'cover',
    '& > div': {
      backgroundColor: 'rgba(0,0,0,0.4)',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
    },
  },
  title: {
    margin: '0 auto',
    textAlign: 'center',
    fontWeight: 400,
    color: '#fff',
  },
}));
