import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  condSelect: {
    width: 75,
    marginRight: 12,
    flexShrink: 0,
    [theme.breakpoints.down(768)]: {
      width: 65,
      '& fieldset': {
        minInlineSize: 'auto',
        '& legend': {
          maxWidth: 'fit-content',
          '& > span': {
            fontSize: 9,
          },
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
      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, -6px) scale(0.75)',
      },
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
