import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  filterButton: {
    borderRadius: 0,
    borderTopRightRadius: 16,
    minWidth: 160,
    padding: 5,
    height: '100%',
    [theme.breakpoints.down(1025)]: {
      minWidth: 72,
    },
    [theme.breakpoints.down(426)]: {
      minWidth: 40,
    },
  },
}));
