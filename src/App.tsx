import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import Aos from 'aos'
import { GlobaStylesApp } from './styles'
import * as Pages from './pages'
import * as Layouts from '~/components/layouts'
import 'aos/dist/aos.css'
import 'antd'
import './styles.scss'

const App: React.FC = () => {
  useEffect(() => {
    Aos.init({
      once: true
    })
  }, [])
  return (
    <>
      <GlobaStylesApp />
      <Routes>
        <Route path='/' element={<Layouts.MainLayout />}>
          <Route path='/' element={<Pages.Home />}>
            <Route element={<Layouts.ModalLayout />}>
              <Route path='board/create' element={<Pages.Board />} />
              <Route path='board/edit/:id' element={<Pages.Board />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
