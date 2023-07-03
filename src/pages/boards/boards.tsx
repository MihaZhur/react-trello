import React, { useEffect, useState } from 'react'

import { Button, Col, Input, Pagination, Row, Spin, Typography } from 'antd'
import { useSearchParams } from 'react-router-dom'

import { Board } from '~/components'
import { Error } from '~/components/error'
import { ModalBoard } from '~/components/modal'

import { useGetBoards } from '~/hooks/board/use-get-boards'

import { isShowPagination } from '~/utils/is-show-pagination'

const { Search } = Input
const { Title } = Typography

export const BoardsPage: React.FC = () => {
  const [boardParams, setBoardParams] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const LIMITE_BOARD = 8

  const { isLoading, data, isSuccess, isError } = useGetBoards(searchParams)

  const setSerchParamsModal = (boradParams: string) => {
    return () => {
      setIsModalOpen(true)
      searchParams.set('modal', 'true')
      searchParams.set('board', boradParams)
      setBoardParams(boradParams)
      setSearchParams(searchParams)
    }
  }

  const changePage = (page: number) => {
    searchParams.set('page', `${page}`)
    setSearchParams(searchParams)
  }

  const showModalCreate = setSerchParamsModal('create')
  const showModalEdit = setSerchParamsModal('edit')

  const handleCancel = () => {
    setIsModalOpen(false)
    searchParams.delete('modal')
    searchParams.delete('board')
    searchParams.delete('boardId')
    setSearchParams(searchParams)
  }
  useEffect(() => {
    if (searchParams.get('modal')) {
      const board = searchParams.get('board')
      board !== null ? setSerchParamsModal(board)() : null
    }
    if (!searchParams.get('modal')) handleCancel()
  }, [])

  if (isLoading) {
    return (
      <Row justify={'center'} align={'middle'} style={{ height: '100%' }}>
        <Spin tip='Идет загрузка...' size='large'>
          <div className='content' style={{ width: '400px', height: '400px' }} />
        </Spin>
      </Row>
    )
  }
  if (isError) {
    return <Error />
  }
  return (
    <>
      <Row justify={'start'}>
        <Col span={10}>
          <Title>Все доски</Title>
        </Col>
      </Row>
      <Row justify={'space-between'}>
        <Col span={10}>
          <Button onClick={showModalCreate} type='primary'>
            Создать доску
          </Button>
        </Col>
        <Col span={10}>
          <Search placeholder='input search text' allowClear enterButton='Search' size='large' />
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ paddingTop: '80px' }}>
        {isSuccess &&
          data.boards.map((item) => {
            return (
              <Col span={6} key={item.id}>
                <Board
                  board={item}
                  SetURLSearchParams={setSearchParams}
                  URLSearchParams={searchParams}
                  edit={showModalEdit}
                />
              </Col>
            )
          })}
      </Row>
      {isShowPagination(LIMITE_BOARD, data!.total) && (
        <Pagination
          style={{ marginTop: '80px' }}
          pageSize={LIMITE_BOARD}
          total={data?.total}
          defaultCurrent={data?.currentPage}
          onChange={changePage}
        />
      )}
      <ModalBoard boardParams={boardParams} isOpened={isModalOpen} onCancel={handleCancel} />
    </>
  )
}
