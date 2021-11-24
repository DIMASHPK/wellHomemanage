import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  filterItemContainer: {
    display: 'flex',
    marginBottom: 12,
    alignItems: 'center',
  },
  valueInput: {
    marginRight: 12,
    flexShrink: 0,
  },
}));
