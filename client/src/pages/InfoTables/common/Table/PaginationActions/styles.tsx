import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  boxContainer: {
    [theme.breakpoints.down(768)]: {
      marginLeft: 0,
    },
  },
  action: {
    [theme.breakpoints.down(768)]: {
      padding: 5,
    },
  },
}));
