import { v4 as uuidv4 } from 'uuid'

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
  boards: Board[]

  constructor() {
    if (this.getItemsStorage() === null) {
      this.setItemsStorage(boardsArray)
    }
    this.boards = this.getItemsStorage()
  }

  private getItemsStorage(): Board[] {
    return JSON.parse(localStorage.getItem(this.KEY_BOARD)!)
  }

  private setItemsStorage(array: Board[]) {
    localStorage.setItem(this.KEY_BOARD, JSON.stringify(array))
  }

  public getBoards(currentPage = 1): Promise<RequestBoard> {
    return new Promise((resolve) => {
      const limit = 8

      const total = this.boards?.length

      const countPages = Math.ceil(total / limit)

      const favoritesBoards = this.boards.filter((board) => board.favorite)

      const currentBoardsPage = this.boards.slice((currentPage - 1) * limit, currentPage * limit)

      setTimeout(() => resolve({ total, favoritesBoards, boards: currentBoardsPage, currentPage, countPages }), 200)
    })
  }

  public createBoard(body: Board): Promise<Board> {
    return new Promise((resolve) => {
      body.id = uuidv4()
      console.log(this.boards)
      this.boards.unshift(body)
      this.setItemsStorage(this.boards)
      console.log(this.boards)
      setTimeout(() => resolve(body), 100)
    })
  }

  public getBoardById(id: string | null): Promise<Board | null> {
    const board = this.boards.find((board) => board.id === id)
    return new Promise((resolve, reject) => {
      if (board) setTimeout(() => resolve(board), 1000)
      else reject(null)
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public updateBoard() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public deleteBoard(id: string) {
    return new Promise((resolve) => {
      this.boards = this.boards.filter((board) => board.id !== id)
      this.setItemsStorage(this.boards)
      setTimeout(() => resolve(this.boards), 0)
    })
  }
}

export const boardApi = new BoardApi()
