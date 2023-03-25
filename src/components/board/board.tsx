import React from 'react'

import { Link } from 'react-router-dom'
import {  PushpinFilled, PushpinOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import * as S from './board.styled'
import * as UI from '~/ui-kit'

export const Board: React.FC = () => {
  const isActive = false

  return (
    <S.BoardCard data-aos='fade-up' data-aos-duration='500'>
      <S.BoardInfo>
        <S.BoardTitle>Название доски</S.BoardTitle>
        <S.BoardBottom>
          <Link to='#'>
            <UI.Buttons.Button>Перейти к доске</UI.Buttons.Button>
          </Link>
          {/* <UI.Buttons.ButtonFavorites>Избранное</UI.Buttons.ButtonFavorites> */}
          <S.BoardSettings>
            <UI.Buttons.ButtonIcon>
              <UI.Buttons.ButtonPopup>
                {!isActive ? 'Добавить в избранное' : 'Убрать из избранного'}
              </UI.Buttons.ButtonPopup>
              {isActive ? <PushpinFilled /> :  <PushpinOutlined />}
            </UI.Buttons.ButtonIcon>
            <UI.Buttons.ButtonIcon>
            <UI.Buttons.ButtonPopup>
                Редактировать доску
              </UI.Buttons.ButtonPopup>
              <EditOutlined />
            </UI.Buttons.ButtonIcon>
            <UI.Buttons.ButtonIcon>
            <UI.Buttons.ButtonPopup>
                Удалить доску
              </UI.Buttons.ButtonPopup>
              <DeleteOutlined />
            </UI.Buttons.ButtonIcon>
          </S.BoardSettings>
        </S.BoardBottom>
      </S.BoardInfo>
    </S.BoardCard>
  )
}
