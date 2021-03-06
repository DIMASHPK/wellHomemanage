import { makeStyles } from '@material-ui/core';
import { UseStylesPropsType } from './types';

export const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
    position: 'relative',
  },
  tableContainer: {
    flexGrow: 1,
    borderRadius: 16,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down(768)]: {
      borderBottomLeftRadius: 7,
      borderTopRightRadius: 7,
      marginLeft: 0,
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
        borderRadius: 16,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 16,
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.5);',
      },
      '&::-webkit-scrollbar': {
        height: 15,
        width: 15,
      },
    },
  },
  sideContainer: {
    padding: 24,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    paddingBottom: ({ withPagination }: UseStylesPropsType) =>
      withPagination ? 0 : 24,
    [theme.breakpoints.down(768)]: {
      padding: 10,
    },
  },
  loaderContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    flexShrink: 0,
    [theme.breakpoints.down(768)]: {
      display: 'flex',
    },
  },
  toolbar: {
    [theme.breakpoints.down(768)]: {
      padding: 0,
      width: '100%',
      margin: '10px 0 ',
      minHeight: 'auto',
      display: 'grid',
      justifyItems: 'end',
      gridTemplateColumns: 'repeat(4, auto)',
    },
  },
  spacer: {
    [theme.breakpoints.down(768)]: {
      display: 'none',
    },
  },
  caption: {
    [theme.breakpoints.down(768)]: {
      fontSize: 13,
      lineHeight: '15px',
    },
  },
  selectRoot: {
    [theme.breakpoints.down(768)]: {
      margin: 0,
    },
  },
  menuItem: {
    [theme.breakpoints.down(768)]: {
      fontSize: 13,
      lineHeight: '15px',
    },
  },
  select: {
    minHeight: 'auto',
  },
  tableHeadRow: {
    '& > th:last-of-type': {
      width: 'unset !important',
    },
  },
}));
