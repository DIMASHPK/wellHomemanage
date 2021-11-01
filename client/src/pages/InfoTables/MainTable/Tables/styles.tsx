import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  swipeableContainer: {
    flexGrow: 1,
    '& > div': {
      height: '100%',
      '& > div': {
        position: 'relative',
      },
    },
  },
}));
