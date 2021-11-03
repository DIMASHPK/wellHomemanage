import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  boxContainer: {
    [theme.breakpoints.down(756)]: {
      gridRowStart: 2,
      gridColumnEnd: 18,
      gridColumnStart: 8,
      marginLeft: 0,
    },
  },
  action: {
    [theme.breakpoints.down(756)]: {
      padding: 5,
    },
  },
}));
