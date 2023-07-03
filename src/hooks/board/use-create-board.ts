import { boardApi } from '~/api'

import { Board } from '~/models'

import { useMutation } from '@tanstack/react-query'

export const useCreateBoard = () => {
  async function fetchFn(body: Board) {
    try {
      const response = await boardApi.createBoard(body)
      return response
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  return useMutation(fetchFn)
}
