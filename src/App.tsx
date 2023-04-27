import React, { useEffect } from 'react'

import Aos from 'aos'
import { Route, Routes } from 'react-router'

import { MainLayout } from '~/components'

import * as Pages from './pages'

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Pages.Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
