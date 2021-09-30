import { HandlePageType } from './types';

export const handlePage: HandlePageType = ({
  page = '0',
  rowsPerPage = '10',
}) => ({
  limit: parseInt(rowsPerPage),
  offset: parseInt(page) * parseInt(rowsPerPage),
  page,
});
