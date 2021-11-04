import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  root: {
    [theme.breakpoints.down(768)]: {
      '& svg': {
        fontSize: '1.25rem',
      },
    },
  },
  label: {
    [theme.breakpoints.down(768)]: {
      fontSize: 12,
      lineHeight: '14px',
    },
  },
}));
