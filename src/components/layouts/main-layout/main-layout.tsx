import React from 'react'
import { Outlet } from 'react-router'
import * as S from '~/ui-kit/'

export const MainLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  )
}
