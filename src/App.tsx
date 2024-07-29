import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './views/Root'
import Dashboard from './views/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
