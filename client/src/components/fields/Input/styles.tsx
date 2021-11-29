import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down(768)]: {
      '& fieldset': {
        minInlineSize: 'auto',
        '& legend > span': {
          fontSize: 9,
        },
      },
      '&  input, &  label': {
        fontSize: 12,
        lineHeight: '12px',
      },
      '& input': {
        padding: '15px 10px',
        height: 42,
        boxSizing: 'border-box',
      },
      '& label': {
        transform: 'translate(14px, 15px) scale(1)',
      },
    },
  },
}));
