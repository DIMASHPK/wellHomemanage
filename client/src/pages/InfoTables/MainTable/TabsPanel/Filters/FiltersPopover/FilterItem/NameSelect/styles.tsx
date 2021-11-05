import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  nameSelect: {
    width: 238,
    marginRight: 12,
    flexShrink: 0,
    [theme.breakpoints.down(768)]: {
      width: 185,
      '& fieldset': {
        minInlineSize: 'auto',
        '& legend > span': {
          fontSize: 9,
        },
      },
    },
  },
  select: {
    [theme.breakpoints.down(768)]: {
      fontSize: 12,
      lineHeight: '14px',
      height: 42,
      boxSizing: 'border-box',
      padding: '15px 10px',
    },
  },
  labelRoot: {
    [theme.breakpoints.down(768)]: {
      fontSize: 12,
      lineHeight: '14px',
      transform: 'translate(14px, 15px) scale(1)',
    },
  },
  option: {
    [theme.breakpoints.down(768)]: {
      fontSize: 12,
      lineHeight: '14px',
      minHeight: 'auto',
    },
  },
}));
