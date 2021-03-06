import React, { memo } from 'react';
import { useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { HandleClickTypes, TablePaginationActionsType } from './types';
import { useStyles } from './styles';

const TablePaginationActions: React.FC<TablePaginationActionsType> = memo(
  props => {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const { boxContainer, action } = useStyles();

    const handleFirstPageButtonClick: HandleClickTypes = event => {
      onPageChange?.(event, 0);
    };

    const handleBackButtonClick: HandleClickTypes = event => {
      onPageChange?.(event, page - 1);
    };

    const handleNextButtonClick: HandleClickTypes = event => {
      onPageChange?.(event, page + 1);
    };

    const handleLastPageButtonClick: HandleClickTypes = event => {
      onPageChange?.(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }} className={boxContainer}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
          className={action}
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
          className={action}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
          className={action}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
          className={action}
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
);

TablePaginationActions.displayName = 'TablePaginationActions';

export default TablePaginationActions;
