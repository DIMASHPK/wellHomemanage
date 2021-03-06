import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  formItemWrapper: {
    padding: 22,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    boxShadow: theme.shadows[3],
    maxHeight: '100%',
    overflowY: 'auto',
  },
  titleContainer: {
    display: 'flex',
    position: 'relative',
    marginBottom: 22,
  },
  title: {
    display: 'block',
    fontWeight: 500,
    fontSize: 17,
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: -14,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  inputRoot: {
    marginBottom: 12,
  },
}));
