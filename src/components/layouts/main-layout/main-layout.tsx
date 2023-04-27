import React from 'react'

import { Outlet } from 'react-router'

import * as S from '~/ui-kit/'

import { ModalProvider } from '~/provider/modal'

export const MainLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <ModalProvider>
          <Outlet />
        </ModalProvider>
      </S.Container>
    </S.Wrapper>
  )
}
