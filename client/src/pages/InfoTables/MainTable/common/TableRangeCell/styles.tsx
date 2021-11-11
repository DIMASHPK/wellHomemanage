import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  tableRangeCellInfoWrapper: {
    position: 'relative',
  },
  tableRangeCellDatesFullInfoContainer: {
    background: theme.palette.common.white,
    borderRadius: 6,
    boxShadow: theme.shadows[3],
  },
  tooltipListItem: {
    color: theme.palette.common.black,
    fontSize: 12,
    lineHeight: '14px',
  },
  tooltipList: {
    padding: 0,
  },
  copyAction: {
    fontSize: 12,
    lineHeight: '14px',
    marginRight: 5,
    color: theme.palette.primary.main,
  },
}));
