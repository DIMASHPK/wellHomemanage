import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  tabPanelContainer: {
    flexGrow: 1,
    overflowX: 'hidden',
    '& > div': {
      height: '100%',
    },
  },
}));
