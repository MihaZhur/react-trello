import React, { PropsWithChildren, useMemo, useState } from 'react'

import { useLocation } from 'react-router'

import { ModalContext } from './modal-context'

export const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isActiveModalState, setIsActiveModalState] = useState<boolean>(false)
  const { search } = useLocation()
  useMemo(() => {
    const modalParamsActive = new URLSearchParams(search).get('modal')
    modalParamsActive === 'true' ? setIsActiveModalState(true) : setIsActiveModalState(false)
  }, [search])

  return <ModalContext.Provider value={{ isActiveModalState, setIsActiveModalState }}>{children}</ModalContext.Provider>
}
