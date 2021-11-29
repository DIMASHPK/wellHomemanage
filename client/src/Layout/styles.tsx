import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  modalContainer: {
    minWidth: 450,
    [theme.breakpoints.down(450)]: {
      minWidth: 'unset',
      width: '100%',
      margin: 5,
    },
  },
  titleClass: {
    [theme.breakpoints.down(768)]: {
      fontSize: 15,
    },
  },
}));
