import { boardsArray } from '~/utils/board-mock'

import { Board } from '~/models'

interface RequestBoard {
  countPages: number
  favoritesBoards: Board[]
  boards: Board[]
}

class BoardApi {
  private KEY_BOARD = 'board'

  private getItemsStorage() {
    return JSON.parse(localStorage.getItem(this.KEY_BOARD)!)
  }

  private setItemsStorage(array: Board[]) {
    localStorage.setItem(this.KEY_BOARD, JSON.stringify(array))
  }

  private boards: Board[] = this.getItemsStorage() ?? boardsArray

  public getBoards(currentPage = 1): Promise<RequestBoard> {
    return new Promise((resolve) => {
      const limit = 8

      const countPages = Math.ceil(this.boards.length / limit)

      const favoritesBoards = this.boards.filter((board) => board.favorite)

      const currentBoardsPage = this.boards.slice((currentPage - 1) * limit, currentPage * limit)

      setTimeout(() => resolve({ countPages, favoritesBoards, boards: currentBoardsPage }), 1000)
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

export default new BoardApi()
