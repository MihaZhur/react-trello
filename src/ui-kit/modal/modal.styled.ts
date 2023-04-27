import styled, { keyframes } from 'styled-components'

interface Prop {
  isAnimate?: boolean
  time?: number
  isActive?: boolean
}
const AnimationOpenPopup = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const AnimationClosePopup = keyframes`
    0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`
const AnimationOpenContent = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`
const AnimationCloseContent = keyframes`
  0% {

    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const ModalContainer = styled.div<Prop>`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  z-index: 100;
  animation-name: ${(props) => (props.isAnimate ? AnimationOpenPopup : AnimationClosePopup)};
  animation-duration: ${(props) => props.time + 'ms'};
  animation-fill-mode: forwards;
`

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalContent = styled.div<Prop>`
  max-width: 700px;
  padding: 20px;
  width: 100%;
  min-height: 200px;
  background-color: #fff;
  border-radius: 20px;
  cursor: auto;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  animation-name: ${(props) => (props.isAnimate ? AnimationOpenContent : AnimationCloseContent)};
  animation-duration: ${(props) => props.time + 'ms'};
  animation-fill-mode: forwards;
`
