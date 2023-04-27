export const validParamsLocationModal = () => {
  const isQueryParams = /\?/g.test(window.location.search) ? '&' : '?'
  return window.location.search + isQueryParams + 'modal=true&'
}
