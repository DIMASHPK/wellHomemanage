import { makeStyles } from '@material-ui/core';
import { HandleWidthArgsType } from './types';

export const useStyles = makeStyles(() => ({
  tableCell: {
    verticalAlign: 'top',
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
