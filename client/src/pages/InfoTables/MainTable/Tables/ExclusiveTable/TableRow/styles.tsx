import { makeStyles, Theme } from '@material-ui/core';
import { stylesTypes } from './types';

export const useStyles = makeStyles<Theme, stylesTypes>(() => ({
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
    width: 3300,
  },
  addressCell: {
    minWidth: 140,
  },
  typeCell: {
    minWidth: 135,
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
  watchingDayCell: {
    minWidth: 205,
  },
}));
