import React from 'react'

import { RouteObject, useRoutes } from 'react-router-dom'

import { MainLayout } from '../components'
import { BoardsPage, Home } from '../pages'

import { routes } from './routes'

const home: RouteObject = {
  index: true,
  element: <Home />,
}
const boards: RouteObject = {
  path: routes.boards.url,
  element: <BoardsPage />,
}

const router: RouteObject[] = [
  {
    path: routes.home.url,
    element: <MainLayout />,
    children: [home, boards],
  },
]

export const AppRouter = () => {
  return useRoutes(router)
}
