import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  tableCell: {
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    padding: 16,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: '140%',
    textTransform: 'capitalize',
    color: theme.palette.tableHeadCell,
  },
}));
