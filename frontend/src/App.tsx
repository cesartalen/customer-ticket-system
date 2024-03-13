import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import FAQPage from './pages/FAQPage'
import { AppLayout } from './layouts/AppLayout'
import CreateTicketPage from './pages/CreateTicketPage'
import ViewTicketPage from './pages/ViewTicketPage'

const router = createBrowserRouter([
  {

    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
      },
      {
        path: "/faq",
        element: <FAQPage/>,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        path: "/register",
        element: <RegisterPage/>,
      },
      {
        path: "/createTicket",
        element: <CreateTicketPage/>,
      },
      {
        path: "/tickets/:id",
        element: <ViewTicketPage/>,
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
