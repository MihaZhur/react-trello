import React, { PropsWithChildren, useEffect, useState } from 'react'

import { useNavigate } from 'react-router'

import { ModalContext } from '~/provider/modal'

import * as S from './modal.styled'

export const Modal: React.FC<PropsWithChildren> = ({ children }) => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const { setIsActiveModalState } = React.useContext(ModalContext)
  const TIME_ANIMATION = 300
  const body: HTMLElement = document.body
  const rootApp: HTMLElement = body.querySelector('#root')!
  const navigate = useNavigate()
  const searchParams = window.location.search
  const srtingParamsGoBack = /&modal/.test(searchParams)
    ? searchParams.replace(/&modal.*/, '')
    : searchParams.replace(/\?modal.*/, '')
  const goBack = () => navigate(srtingParamsGoBack)
  let lockPadding

  const closeEscModal = (evt: KeyboardEvent) => {
    console.log('Escape')
    if (evt.code === 'Escape') {
      closeModal()
    }
  }
  const closeModal = () => {
    setIsAnimate(false)
    document.removeEventListener('keydown', closeEscModal)
    setTimeout(() => {
      goBack()
      setIsActive(false)
      body.classList.remove('no-scroll')
      body.style.paddingRight = '0px'
      setIsActiveModalState(false)
      return true
    }, TIME_ANIMATION)
  }

  useEffect(() => {
    setIsAnimate(true)
    setIsActive(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lockPadding = window.innerWidth - rootApp.offsetWidth + 'px'
    body.classList.add('no-scroll')
    body.style.paddingRight = lockPadding
    document.addEventListener('keydown', closeEscModal)
    return () => closeModal()
  }, [])

  return (
    <>
      <S.ModalContainer isActive={isActive} isAnimate={isAnimate} time={TIME_ANIMATION} onClick={() => closeModal()}>
        <S.ModalWrapper>
          <S.ModalContent
            isActive={isActive}
            isAnimate={isAnimate}
            time={TIME_ANIMATION}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </S.ModalContent>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  )
}
