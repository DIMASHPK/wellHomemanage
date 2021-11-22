import { makeStyles } from '@material-ui/core';
import { HandleWidthArgsType } from './types';

export const useStyles = makeStyles(() => ({
  tableCell: {
    verticalAlign: 'top',
    paddingLeft: 0,
    paddingRight: 0,
    borderBottom: 'none',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: ({ ref }: HandleWidthArgsType) => {
      if (ref?.current) {
        const { width } = ref.current.getBoundingClientRect();

        return width;
      }

      return '100%';
    },
  },
  title: {},
}));
