import React from 'react'

import { Button } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useDeleteBoard } from '~/hooks/board/use-delete-board'

import { Board as IBoard } from '~/models/board'

import { DeleteOutlined, EditOutlined, PushpinOutlined } from '@ant-design/icons'

import * as S from './board.styled'
// <DeleteFilled />
//<EditFilled />
interface BoardSettings {
  edit?: () => void
  SetURLSearchParams?: ReturnType<typeof useSearchParams>[1]
  URLSearchParams?: ReturnType<typeof useSearchParams>[0]
  board: IBoard
}

export const Board: React.FC<BoardSettings> = ({ edit, SetURLSearchParams, URLSearchParams, board }) => {
  const navigate = useNavigate()
  const { mutate: deleteBoard } = useDeleteBoard()
  const editBoard = (id: string) => {
    URLSearchParams?.set('boardId', id)
    SetURLSearchParams && SetURLSearchParams(URLSearchParams)
    edit && edit()
  }
  return (
    <S.BoardCard>
      <S.BoardInfo>
        <S.BoardTitle>{board.title}</S.BoardTitle>
        <S.BoardBottom>
          <Button onClick={() => navigate('/boards/' + board.id)}>Перейти к доске</Button>
          <S.BoardSettings>
            <Button size='small'>
              <PushpinOutlined size={12} />
            </Button>
            <Button size='small' onClick={() => editBoard(board.id)}>
              <EditOutlined size={12} />
            </Button>
            <Button size='small' onClick={() => deleteBoard(board.id)}>
              <DeleteOutlined size={12} />
            </Button>
          </S.BoardSettings>
        </S.BoardBottom>
      </S.BoardInfo>
    </S.BoardCard>
  )
}
