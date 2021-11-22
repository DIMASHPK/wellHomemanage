import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: 20,
  },
  input: {
    marginBottom: 15,
    width: '100%',
    '&:last-of-type': {
      marginBottom: 5,
    },
  },
  checkbox: {
    marginBottom: 5,
  },
  submitButton: {
    alignSelf: 'end',
  },
}));
