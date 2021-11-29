import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  label: {
    [theme.breakpoints.down(768)]: {
      fontSize: 12,
      lineHeight: '14px',
    },
  },
}));
