import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  modalContainer: {
    minWidth: 320,
    padding: 20,
  },
  titleContainer: {
    marginTop: 0,
    marginBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& > button + button': {
      marginLeft: 10,
    },
  },
}));
