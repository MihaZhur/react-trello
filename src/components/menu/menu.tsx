import React from 'react'

import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { To, useLocation, useNavigate } from 'react-router'

import { routes } from '~/routes'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  url: string,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    url,
    icon,
    children,
    label,
  } as MenuItem
}

export const MenuLayout: React.FC = () => {
  const location = useLocation()
  const navigation = useNavigate()
  const items: MenuItem[] = [
    getItem(routes.home.title, routes.home.url, routes.home.url, <routes.home.icon />),
    getItem(routes.boards.title, routes.boards.url, routes.boards.url, <routes.boards.icon />),
  ]
  function pushRoute(el: { key: To }) {
    navigation(el.key)
  }

  return <Menu theme='dark' selectedKeys={[location.pathname]} onClick={pushRoute} mode='inline' items={items} />
}
