import { Link } from 'react-router-dom'
import NotLoggedIn from './Home/NotLoggedIn'
import LoggedIn from './Home/LoggedIn'
import { useUserState } from '../store/userState'
import { useStore } from 'zustand'

export default function HomePage() {
  const userState : any = useStore(useUserState)

  return(
    <>
      {userState.status ? 
        (
          <LoggedIn/>
        ) : (
          <NotLoggedIn/>
        )
      }
    </>
  )
}