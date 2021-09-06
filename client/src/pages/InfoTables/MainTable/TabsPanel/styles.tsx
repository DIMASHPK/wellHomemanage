import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
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
    position: 'relative',
    display: 'flex',
    borderBottom: `1px solid rgba(0, 0, 0, 0.12)`,
    background: theme.palette.lightGrey,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'space-between',
  },
  selectedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme.palette.primary.main,
    zIndex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    transition: 'transform .3s',
    transform: 'translateY(-100%)',
  },
  opened: {
    transform: 'translateY(0%)',
  },
  selectedContainerTitle: {
    color: theme.palette.common.white,
    fontSize: 17,
    fontWeight: 500,
  },
  selectedContainerActionContainer: {
    display: 'flex',
  },
  button: {
    '& > span': {
      fontSize: 10,
    },
    '&:first-of-type': {
      background: theme.palette.success.main,
      color: theme.palette.common.white,
      '&:hover': {
        background: theme.palette.success.dark,
      },
    },
    '&:last-of-type': {
      marginLeft: 15,
    },
  },
  leftTabsContainer: {
    display: 'flex',
  },
}));
