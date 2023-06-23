import { BoardApi } from '~/api'

import { useQuery } from '@tanstack/react-query'

export const useGetBoards = (params: URLSearchParams) => {
  const boardApi = new BoardApi()
  // const currentParams = new URLSearchParams(params)

  const pageNumber = Number(params.get('page')) !== 0 ? Number(params.get('page')) : 1
  const page = !isNaN(pageNumber) ? pageNumber : 1

  return useQuery({
    queryKey: ['boards', page],
    queryFn: () => boardApi.getBoards(page),
  })
}
