import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '~/app'

import 'aos/dist/aos.css'
import './styles.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { boardsArray } from './utils/board-mock'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

localStorage.setItem('board', JSON.stringify(boardsArray))

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
)
