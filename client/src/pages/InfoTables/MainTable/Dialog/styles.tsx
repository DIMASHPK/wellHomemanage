import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  formItemsContainer: {
    display: 'flex',
    padding: '0 22px',
    paddingTop: 0,
    overflow: 'auto',
  },
  form: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  actionContainer: {
    display: 'flex',
    padding: 22,
    paddingTop: 0,
  },
  formAction: {
    marginRight: 22,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  formItemWrapperMain: {
    marginRight: 18,
    marginTop: 22,
    marginBottom: 22,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
}));
