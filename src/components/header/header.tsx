import React from 'react'

import { Buttons } from '~/ui-kit'

import { validParamsLocationModal } from '~/utils/valid-params-location-modal'

import * as S from './header.styled'

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Buttons.ButtonLink to={validParamsLocationModal() + 'board=create'}> Добавить доску </Buttons.ButtonLink>
    </S.Header>
  )
}
