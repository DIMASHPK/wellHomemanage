import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {},
  tipWrapper: {
    display: 'block',
    marginLeft: 4,
    lineHeight: 'normal',
    [theme.breakpoints.down(1025)]: {
      display: 'none',
    },
  },
}));
