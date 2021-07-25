import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  swipeableContainer: {
    '& > div': {
      height: '100%',
    },
  },
}));
