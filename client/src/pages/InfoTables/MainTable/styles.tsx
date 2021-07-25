import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  mainTable: {
    height: '100vh',
    padding: '70px 50px 30px',
    display: 'flex',
    flexDirection: 'column',
  },
  mainTableTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 40,
  },
  root: {
    padding: 10,
    minHeight: 'auto',
    transition: 'color .3s, background-color .3s',
    color: theme.palette.text.primary,
    '&:first-of-type': {
      borderTopLeftRadius: 16,
    },
  },
  wrapper: {
    height: 'auto',
    padding: 0,
  },
  tabsRoot: {
    minHeight: 'unset',
  },
  tabsContainer: {
    display: 'flex',
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    background: theme.palette.lightGrey,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentContainer: {
    boxShadow:
      '0 0 #00000000, 0 0 #00000000,0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);',
    borderRadius: 16,
    height: 'calc(100% - 68px)',
    display: 'flex',
    flexDirection: 'column',
  },
  addButton: {
    borderRadius: 0,
    minWidth: 160,
    padding: 5,
  },
}));
