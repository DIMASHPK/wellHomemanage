import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  titleContainer: {
    position: 'relative',
    padding: 0,
    marginTop: 22,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  titleClass: {
    textAlign: 'center',
    display: 'block',
    fontWeight: 500,
    fontSize: 20,
  },
  modalContainer: {
    minWidth: 600,
    maxWidth: 'unset',
    [theme.breakpoints.down(601)]: {
      minWidth: '100%',
    },
  },
  closeButtonIcon: {
    color: theme.palette.primary.main,
  },
}));
