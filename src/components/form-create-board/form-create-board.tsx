import React from 'react'

import { Button, Checkbox, Form, Input } from 'antd'
import { useSearchParams } from 'react-router-dom'

import { boardApi } from '~/api'

import { Board } from '~/models'

// import { useCreateBoard } from '~/hooks/board/use-create-board'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface BehaviorCreateBoard {
  onCloseModal: () => void
}

interface CreateBoard {
  id: string
  columns: []
  title: string
  remember: boolean
}

export const FormCreateBoard: React.FC<BehaviorCreateBoard> = ({ onCloseModal }) => {
  const queryClient = useQueryClient()
  const [serchParams, setSearchParams] = useSearchParams()
  const [form] = Form.useForm()

  const createBoard = async (body: Board): Promise<Board> => {
    try {
      const response = await boardApi.createBoard(body)
      return response
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  const { mutate: create } = useMutation({
    mutationFn: createBoard,
    onSuccess: () => {
      serchParams.set('page', '1')
      setSearchParams(serchParams)
      queryClient.invalidateQueries({ queryKey: ['boards'] })
      onCloseModal()
      form.resetFields()
    },
  })

  // const client = useQueryClient()

  const onFinish = async (values: CreateBoard) => {
    create({
      id: '1',
      title: values.title,
      columns: [],
      favorite: values.remember,
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: '100%' }}
      form={form}
      onFinish={(values) => onFinish(values)}
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
  )
}
