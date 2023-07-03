import { boardApi } from '~/api'

import { useQuery } from '@tanstack/react-query'

export const useGetBoard = (params: URLSearchParams) => {
  const boardId = params.get('boardId')

  return useQuery({
    queryKey: ['board', boardId],
    queryFn: () => boardApi.getBoardById(boardId),
  })
}
