export type HandlePageType = (data: { page: string; rowsPerPage: string }) => {
  limit: number;
  offset: number;
  page: string;
};
