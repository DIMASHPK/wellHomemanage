import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  mainTable: {
    height: '100vh',
    padding: '70px 50px 30px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down(1025)]: {
      padding: '40px 10px 20px',
    },
  },
  mainTableTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 40,
  },
  contentContainer: {
    boxShadow:
      '0 0 #00000000, 0 0 #00000000,0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);',
    borderRadius: 16,
    height: 'calc(100% - 68px)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
}));
