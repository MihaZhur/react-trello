import styled from 'styled-components'

export const Button = styled.button`
  font-size: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;
  transition: all 0.2s ease;
  &:hover {
    background-color: #fff;
    color: #1677ff;
  }
`

export const ButtonFavorites = styled(Button)`
  padding-right: 25px;
  position: relative;
  margin-left: 10px;
  margin-right: auto;
  &::before,
  &::after {
    content: '';
    width: 10px;
    height: 1px;
    background-color: currentColor;
    right: 6px;
    position: absolute;
    top: 50%;
  }
  &:after {
    transform: rotate(90deg);
  }
`
export const ButtonPopup = styled.div`
  border-radius: 4px;
  background-color: #fff;
  padding: 6px 10px;
  color: #040404;
  font-size: 12px;
  position: absolute;
 
  width:max-content;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all .3s ease ;
  visibility: hidden;
  pointer-events: none;
`

export const ButtonIcon = styled(Button)`
  position: relative;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 3px;
  line-height: 99%;
  &:hover {
    ${ButtonPopup} {
      opacity: 1;
      top: -40px;
      transition: all .3s ease .6s;
      visibility: visible;
    }
  }
`
