import React from 'react'
import { Row, Col } from 'antd'
import { Board } from '../board/board'
export const BoardList: React.FC = () => {
  return (
    <Row className='board-list' gutter={[16, 16]}>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
      <Col span={6}>
        <Board />
      </Col>
    </Row>
  )
}
