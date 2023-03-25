import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './header.styled';
import { Input } from 'antd';
const { Search } = Input;

export const Header: React.FC = () => {
  return (
    <S.Header>
      <NavLink to='board/create' className='ant-btn css-dev-only-do-not-override-mxhywb ant-btn-primary'> Добавить доску </NavLink>
      <Search style={{width: 300}} placeholder="Поиск"  enterButton="Найти" />
    </S.Header>
  );
}
