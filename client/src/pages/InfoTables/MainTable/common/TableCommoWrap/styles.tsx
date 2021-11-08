import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  headCell: {
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    padding: 16,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: '140%',
    textTransform: 'capitalize',
    color: theme.palette.tableHeadCell,
    [theme.breakpoints.down(768)]: {
      fontSize: 14,
      lineHeight: '16px',
    },
  },
  allCheckbox: {
    textAlign: 'left',
    width: 75,
    [theme.breakpoints.down(768)]: {
      '& svg': {
        fontSize: '1.25rem',
      },
    },
  },
}));
