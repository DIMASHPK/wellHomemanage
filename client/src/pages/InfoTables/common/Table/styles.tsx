import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
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
  },
}));
