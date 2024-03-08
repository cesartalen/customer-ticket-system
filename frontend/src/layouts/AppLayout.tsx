import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const AppLayout = () => {
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}