import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'
import appStore from './redux/appStore'
import router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
