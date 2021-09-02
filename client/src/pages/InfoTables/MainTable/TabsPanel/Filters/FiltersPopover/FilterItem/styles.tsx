import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(() => ({
  filterItemContainer: {
    display: 'flex',
    marginBottom: 12,
    alignItems: 'center',
  },
  condSelect: {
    width: 75,
    marginRight: 12,
  },
  nameSelect: {
    width: 238,
    marginRight: 12,
  },
  valueInput: {
    marginRight: 12,
  },
}));
