import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  table: {
    minHeight: '100%',
    minWidth: 650,
    position: 'relative',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  tableContainer: {
    borderRadius: 16,
    '&::-webkit-scrollbar': {
      height: 0,
      width: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
  },
  sideContainer: {
    padding: 24,
    display: 'flex',
    height: '100%',
  },
  loaderContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
