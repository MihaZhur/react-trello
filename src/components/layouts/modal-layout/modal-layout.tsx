import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import * as S from '~/ui-kit/'

export const ModalLayout: React.FC = () => {
  const [isAnimate, setIsAnimate] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const TIME_ANIMATION: number = 300
  const body: HTMLElement = document.body
  const rootApp: HTMLElement = body.querySelector('#root')!
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  let lockPadding

  const closeEscModal = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      closeModal()
    }
  }
  const closeModal = () => {
    setIsAnimate(false)
    setTimeout(() => {
      goBack()
      document.removeEventListener('keydown', closeEscModal)
      setIsActive(false)
      body.classList.remove('no-scroll')
      body.style.paddingRight = '0px'
    }, TIME_ANIMATION)
  }

  useEffect(() => {
    setIsAnimate(true)
    setIsActive(true)
    lockPadding = window.innerWidth - rootApp.offsetWidth + 'px'
    document.addEventListener('keydown', closeEscModal)
    body.classList.add('no-scroll')
    body.style.paddingRight = lockPadding
  }, [])

  return (
    <>
      <S.Modal.ModalContainer
        isActive={isActive}
        isAnimate={isAnimate}
        time={TIME_ANIMATION}
        onClick={closeModal}
      >
        <S.Modal.ModalWrapper>
          <S.Modal.ModalContent
            isActive={isActive}
            isAnimate={isAnimate}
            time={TIME_ANIMATION}
            onClick={(e) => e.stopPropagation()}
          >
            <Outlet context={closeModal} />
          </S.Modal.ModalContent>
        </S.Modal.ModalWrapper>
      </S.Modal.ModalContainer>
    </>
  )
}
