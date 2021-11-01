import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  filtersTitle: {
    fontSize: 17,
    fontWeight: 500,
  },
  closeButton: { padding: 2 },
  popoverPaper: {
    padding: 22,
  },
  filtersContainer: {
    margin: '22px 0',
  },
  actionsContainer: {
    display: 'flex',
    '& > button': {
      '&:first-of-type': {
        marginRight: 20,
      },
    },
  },
}));
