import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AppLayout } from './layouts/AppLayout'

const router = createBrowserRouter([
  {

    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
    ],
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
