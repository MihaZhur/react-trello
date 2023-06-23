import { boardsArray } from '~/utils/board-mock'

import { Board } from '~/models'

interface RequestBoard {
  total: number
  favoritesBoards: Board[]
  boards: Board[]
  currentPage: number
  countPages: number
}

export class BoardApi {
  private KEY_BOARD = 'board'

  private getItemsStorage(): Board[] | null {
    return JSON.parse(localStorage.getItem(this.KEY_BOARD)!)
  }

  private setItemsStorage(array: Board[]) {
    localStorage.setItem(this.KEY_BOARD, JSON.stringify(array))
  }

  private get boards(): Board[] | [] {
    if (this.getItemsStorage() !== null && Array.isArray(this.getItemsStorage())) {
      return this.getItemsStorage()!
    }
    return boardsArray
  }

  public getBoards(currentPage = 1): Promise<RequestBoard> {
    return new Promise((resolve) => {
      const limit = 8

      const total = this.boards?.length

      const countPages = Math.ceil(total / limit)

      const favoritesBoards = this.boards.filter((board) => board.favorite)

      const currentBoardsPage = this.boards.slice((currentPage - 1) * limit, currentPage * limit)

      setTimeout(() => resolve({ total, favoritesBoards, boards: currentBoardsPage, currentPage, countPages }), 3000)
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public createBoard() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public getBoardById() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public updateBoard() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public deleteBoard() {}
}
