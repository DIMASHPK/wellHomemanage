import { makeStyles } from '@material-ui/core';

const size = 19;

export const useStyles = makeStyles(() => ({
  iconFontSize: {
    fontSize: size,
  },
  loader: {
    width: `${size}px !important`,
    height: `${size}px !important`,
  },
}));
