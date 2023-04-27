import { BoardApi } from '~/api'

import { useQuery } from '@tanstack/react-query'

export const useGetBoards = (params: string) => {
  const currentParams = new URLSearchParams(params)

  const pageNumber = Number(currentParams.get('page')) !== 0 ? Number(currentParams.get('page')) : 1
  const page = !isNaN(pageNumber) ? pageNumber : 1

  return useQuery({
    queryKey: ['boards', page],
    queryFn: () => BoardApi.default.getBoards(page),
  })
}
