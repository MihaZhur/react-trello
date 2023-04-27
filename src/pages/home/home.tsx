import React, { useContext } from 'react'

import { AiTwotonePushpin } from 'react-icons/ai'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { Board, BoardGrid } from '~/components/'
import { Header } from '~/components/header'

import { Modal, SubTitle, Title } from '~/ui-kit'

import { useGetBoards } from '~/hooks/board/use-get-boards'

import { ModalContext } from '~/provider/modal'

export const Home: React.FC = () => {
  const { search } = useLocation()
  const { isActiveModalState } = useContext(ModalContext)
  const { data } = useGetBoards(search)
  const favoritesBoards = data?.favoritesBoards ?? []
  const boards = data?.boards ?? []

  return (
    <>
      <Title>Home page</Title>
      <Header />
      <SubTitle>
        Избранное <AiTwotonePushpin style={{ color: '#1677ff', display: 'inline' }} />
      </SubTitle>
      <BoardGrid>{favoritesBoards && favoritesBoards.map((board) => <Board {...board} key={board.id} />)}</BoardGrid>
      <SubTitle>Все доски</SubTitle>
      <BoardGrid>{boards && boards.map((board) => <Board {...board} key={board.id} />)}</BoardGrid>
      <Outlet />
      <Link to='?page=1'>1</Link>
      <Link to='?page=2'>2</Link>
      <Link to='?page=3'>3</Link>
      {isActiveModalState && <Modal>Компонент добавления - редактирования доски</Modal>}
    </>
  )
}
