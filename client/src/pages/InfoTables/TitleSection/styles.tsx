import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  titleSection: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background:
      'url("/assets/infoTables/infoTablesMain.jpg") no-repeat center center',
    backgroundAttachment: 'fixed',
    willChange: 'background-attachment',
    backgroundSize: 'cover',
  },
  title: {
    margin: '0 auto',
    textAlign: 'center',
    fontWeight: 400,
    color: '#fff',
  },
}));
