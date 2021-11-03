import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  addButton: {
    borderRadius: 0,
    minWidth: 160,
    padding: 5,
    [theme.breakpoints.down(1025)]: {
      minWidth: 72,
    },
    [theme.breakpoints.down(426)]: {
      minWidth: 40,
    },
  },
}));
