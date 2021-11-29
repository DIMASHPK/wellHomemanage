import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(768)]: {
      '& svg': {
        fontSize: '1.25rem',
      },
    },
  },
}));
