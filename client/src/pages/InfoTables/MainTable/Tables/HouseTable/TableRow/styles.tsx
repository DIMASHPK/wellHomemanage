import { makeStyles, Theme } from '@material-ui/core';
import { stylesTypes } from './types';

export const useStyles = makeStyles<Theme, stylesTypes>(theme => ({
  tableCell: {
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    padding: 16,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: '140%',
    textTransform: 'capitalize',
    color: theme.palette.tableHeadCell,
  },
  tableRow: {
    transition: 'background-color .15s',
    background: ({ isCheck }) => (isCheck ? 'rgba(79, 145, 255, 0.2)' : 'none'),
    '&:hover': {
      background: 'rgba(79, 145, 255, 0.2)',
      cursor: 'pointer',
    },
    '&:last-of-type td': {
      borderBottom: 'none',
    },
  },
  addressCell: {
    minWidth: 140,
  },
  descriptionCell: {
    minWidth: 330,
  },
  phoneCell: {
    minWidth: 185,
  },
  perMeterCell: {
    minWidth: 100,
  },
  whoGaveCell: {
    minWidth: 160,
  },
  stateOfLidCell: {
    minWidth: 175,
  },
  descriptionOfClientCell: {
    minWidth: 166,
  },
  checkboxRoot: {
    [theme.breakpoints.down(768)]: {
      '& svg': {
        fontSize: '1.25rem',
      },
    },
  },
}));
