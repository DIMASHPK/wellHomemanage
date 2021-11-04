import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  list: {
    padding: 15,
  },
  listItem: {
    [theme.breakpoints.down(768)]: {
      fontSize: 12,
      lineHeight: '14px',
    },
  },
}));
