import React from 'react'

interface ModalIsActiveType {
  isActiveModalState: boolean
  setIsActiveModalState: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = React.createContext<ModalIsActiveType>({
  isActiveModalState: false,
  setIsActiveModalState: () => false,
})
