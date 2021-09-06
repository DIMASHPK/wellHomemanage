import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  filtersTitle: {
    fontSize: 17,
    fontWeight: 500,
  },
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
