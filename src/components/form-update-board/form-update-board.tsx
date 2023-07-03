import React, { useEffect } from 'react'

import { Button, Checkbox, Form, Input, Spin } from 'antd'
import { useSearchParams } from 'react-router-dom'

import { useGetBoard } from '~/hooks/board/use-get-board'

// import { Board } from '~/models'

// import { useCreateBoard } from '~/hooks/board/use-create-board'
// import { useMutation, useQueryClient } from '@tanstack/react-query'

interface BehaviorCreateBoard {
  onCloseModal?: () => void
}

export const FormUpdateBoard: React.FC<BehaviorCreateBoard> = () => {
  // const queryClient = useQueryClient()
  const [serchParams] = useSearchParams()
  const [form] = Form.useForm()
  // const [defaulValudeTitle, setDefaultValueTitle] = useState('123')
  const { data, isLoading, isSuccess } = useGetBoard(serchParams)

  // const initialValues = {
  //   title: 'dfgfdfg',
  // }
  // const client = useQueryClient()

  // const onFinish = async (values) => {}

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    console.log(data)
    // data && setDefaultValueTitle(data.title)
    // if (data) initialValues.title = data?.title
  }, [data])

  if (isLoading) {
    return (
      <Spin tip='Идет загрузка...' size='large'>
        <div className='content' style={{ width: '100%', height: '200px' }} />
      </Spin>
    )
  }

  if (isSuccess) {
    const fields = [
      {
        name: ['title'],
        value: data?.title,
      },
      {
        name: ['remember'],
        value: data?.favorite,
      },
    ]

    return (
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: '100%' }}
        fields={fields}
        form={form}
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
            Редактировать
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
