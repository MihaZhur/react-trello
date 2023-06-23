import styled from 'styled-components'

export const BoardCard = styled.div`
  height: 100%;
  margin-bottom: 20px;
`
export const BoardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`
export const BoardInfo = styled.div`
  border-radius: 5px;
  background-color: #1677ff;
  background: linear-gradient(107deg, rgba(170, 15, 148, 1) 0%, rgba(22, 119, 255, 1) 100%);
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 12px;
  padding-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 2;
  box-shadow: 0px 10px 20px 1px rgba(0, 0, 0, 0.3);
`
export const BoardTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 30px;
`

export const BoardSettings = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  padding: 4px;
  max-width: 106px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
