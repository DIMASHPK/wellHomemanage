import { makeStyles } from '@material-ui/core';
import { UseStylesPropsType } from './types';

export const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
    position: 'relative',
    boxShadow:
      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  tableContainer: {
    flexGrow: 1,
    borderRadius: 16,
    '&::-webkit-scrollbar': {
      height: 0,
      width: 0,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
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
