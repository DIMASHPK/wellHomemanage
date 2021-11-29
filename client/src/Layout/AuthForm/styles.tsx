import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.down(768)]: {
      '& .MuiFormControlLabel-label': {
        fontSize: 12,
        lineHeight: '14px',
      },
    },
  },
  submitButton: {
    alignSelf: 'end',
    marginTop: 5,
  },
}));
