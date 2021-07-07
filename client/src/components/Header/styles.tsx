import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  title: {
    color: theme.palette.common.white,
  },
}));
