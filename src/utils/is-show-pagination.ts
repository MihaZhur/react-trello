export const isShowPagination = (limit: number, total: number) => {
  return total > limit ? true : false
}
