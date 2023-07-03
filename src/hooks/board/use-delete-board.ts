import { boardApi } from '~/api'

import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteBoard = () => {
  const queryClient = useQueryClient()
  async function fetchFn(id: string) {
    try {
      const response = await boardApi.deleteBoard(id)
      return response
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  return useMutation({
    mutationFn: fetchFn,
    onSuccess: () => {
      alert('Задача успешно удалена!')
      queryClient.invalidateQueries(['boards'])
    },
  })
}
