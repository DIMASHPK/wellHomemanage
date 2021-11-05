import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  filterItemContainer: {
    display: 'flex',
    marginBottom: 12,
    alignItems: 'center',
  },
  valueInput: {
    marginRight: 12,
    flexShrink: 0,
    [theme.breakpoints.down(768)]: {
      '&  input, &  label': {
        fontSize: 12,
        lineHeight: '14px',
      },
      '& input': {
        padding: '15px 10px',
        height: 42,
        boxSizing: 'border-box',
      },
      '& label': {
        transform: 'translate(14px, 15px) scale(1)',
      },
      '& fieldset': {
        minInlineSize: 'auto',
        '& legend > span': {
          fontSize: 9,
        },
      },
    },
  },
}));
