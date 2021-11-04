import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
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
