export function buildPaginationMeta(
  totalItems: number,
  page: number,
  itemsPerPage: number,
  itemCount: number,
) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return {
    totalItems,
    itemCount,
    itemsPerPage,
    totalPages,
    page,
  };
}
