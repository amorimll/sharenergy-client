export type GetUsers = (
  search: string,
  page: number,
  rowsPerPage: number
) => Promise<any>;
