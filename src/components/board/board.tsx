import React from 'react'

import { AiOutlineDelete, AiOutlineEdit, AiOutlinePushpin, AiTwotonePushpin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Buttons } from '~/ui-kit'

import { validParamsLocationModal } from '~/utils/valid-params-location-modal'

import { Board as IBoard } from '~/models'

import * as S from './board.styled'

export const Board: React.FC<IBoard> = (board) => {
  return (
    <S.BoardCard data-aos='fade-up' data-aos-duration='500'>
      <S.BoardInfo>
        <S.BoardTitle>{board.title}</S.BoardTitle>
        <S.BoardBottom>
          <Link to={'board/' + board.id}>
            <Buttons.Button>Перейти к доске</Buttons.Button>
          </Link>
          <S.BoardSettings>
            <Buttons.ButtonIcon>
              <Buttons.ButtonPopup>
                {board.favorite ? 'Убрать из избранного' : 'Добавить в избранное'}
              </Buttons.ButtonPopup>
              {board.favorite ? <AiTwotonePushpin /> : <AiOutlinePushpin />}
            </Buttons.ButtonIcon>
            <Buttons.ButtonIconLink to={validParamsLocationModal() + `borad=edit&boardId=${board.id}`}>
              <Buttons.ButtonPopup>Редактировать доску</Buttons.ButtonPopup>
              <AiOutlineEdit />
            </Buttons.ButtonIconLink>
            <Buttons.ButtonIcon>
              <Buttons.ButtonPopup>Удалить доску</Buttons.ButtonPopup>
              <AiOutlineDelete />
            </Buttons.ButtonIcon>
          </S.BoardSettings>
        </S.BoardBottom>
      </S.BoardInfo>
    </S.BoardCard>
  )
}
