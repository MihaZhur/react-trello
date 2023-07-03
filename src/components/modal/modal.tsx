import React from 'react'

import { Modal } from 'antd'

import { FormCreateBoard } from '../form-create-board'
import { FormUpdateBoard } from '../form-update-board/form-update-board'

interface ParamsModal {
  isOpened?: boolean
  onCancel: () => void
  boardParams: string
}

export const ModalBoard: React.FC<ParamsModal> = ({ isOpened, onCancel, boardParams }) => {
  console.log(boardParams, 1)
  if (boardParams === 'create') {
    return (
      <Modal title='Создать доску' open={isOpened} onCancel={onCancel} footer={null}>
        <FormCreateBoard onCloseModal={onCancel} />
      </Modal>
    )
  }
  if (boardParams === 'edit') {
    return (
      <Modal title='Редактировать доску' open={isOpened} onCancel={onCancel} footer={null}>
        <FormUpdateBoard onCloseModal={onCancel} />
      </Modal>
    )
  }
}
