import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// RouterProvider is used instead of BrowserRouter because routing
// is configured declaratively in a separate router object.
// This keeps route definitions centralized and testable.
import { RouterProvider } from 'react-router-dom'
// Redux Provider must wrap the entire app so that
// any route/component can access global state.
// Do NOT move this inside individual pages.
import {Provider} from 'react-redux'
// Single source of truth for global state.
// appStore should be stable and never recreated at runtime.
import appStore from './redux/appStore'
// Centralized route configuration.
// Any layout, loader, or error boundary logic should live there.
import router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
