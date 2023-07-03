import React from 'react'

import { Col, Typography } from 'antd'

const { Title } = Typography
export const Error: React.FC = () => {
  return (
    <Col span={10}>
      <Title>Ошибка 404</Title>
    </Col>
  )
}
