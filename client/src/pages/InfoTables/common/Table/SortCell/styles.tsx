import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  cellWrap: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    '&:hover': {
      '& $hideColumnsAction, & $sortColumnAction': {
        opacity: 1,
      },
    },
  },
  hideColumnsAction: {
    padding: 2,
    height: 'auto',
    width: 'auto',
    marginLeft: 5,
    opacity: 0,
    transition: 'opacity .3s',
  },
  hideColumnsActionIcon: {
    fontSize: 16,
  },
  sortColumnAction: {
    padding: 2,
    height: 'auto',
    width: 'auto',
    margin: 0,
    marginLeft: 5,
  },
  sortColumnActionIcon: {
    fontSize: 16,
  },
  sortLabelRoot: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}));
