import React from 'react'
import { Pagination } from 'antd';
import { PushpinFilled } from '@ant-design/icons'
import { BoardList } from '~/components/board-list'
import { Header } from '~/components/header'
import * as S from '~/ui-kit'
import { Outlet } from 'react-router';
export const Home: React.FC = () => {
  return (
    <>
      <S.Title>Home page</S.Title>
      <Header />
      <S.SubTitle>
        Избранное <PushpinFilled style={{color: '#1677ff'}} />
      </S.SubTitle>
      <BoardList />
      <S.SubTitle>
        Все доски 
      </S.SubTitle>
      <BoardList />
      <Pagination defaultCurrent={1} total={50} />
      <Outlet/>
    </>
  )
}
