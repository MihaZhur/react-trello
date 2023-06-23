import React from 'react'

import { Button, Checkbox, Form, Input, Modal } from 'antd'

interface ParamsModal {
  isOpened?: boolean
  onCancel: () => void
  boardParams: string
}

export const ModalBoard: React.FC<ParamsModal> = ({ isOpened, onCancel, boardParams }) => {
  console.log(boardParams, 1)
  if (boardParams === 'create') {
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    return (
      <Modal title='Создать доску' open={isOpened} onCancel={onCancel} footer={null}>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: '100%' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item name='title' rules={[{ required: true, message: 'Необходимо заполнить поле' }]}>
            <Input />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Добавить в избранное</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Создать доску
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
  if (boardParams === 'edit') {
    return (
      <Modal title='Редактировать доску' open={isOpened} onCancel={onCancel} footer={null}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
  }
}
