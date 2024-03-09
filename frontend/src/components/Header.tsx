import { AiFillHome, AiOutlineLogin, AiOutlineLogout, AiOutlineUserAdd, AiFillQuestionCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useStore } from 'zustand'
import { useUserState } from '../store/userState'     


export const Header = () => {
  const userState : any = useStore(useUserState)
  
  const handleLogOut = () => {
    userState.UpdateName('')
    userState.UpdateToken('')
    userState.UpdateStatus(false)
  }

  return (
    <>
      <div className='header'>
        <div>
          <Link to='/'>Support<AiFillHome/></Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to='/Faq'>
                <AiFillQuestionCircle/> FAQ
              </Link>
            </li>
            {userState.status ? (
            <li onClick={handleLogOut}>
              <Link to='/'>
                <AiOutlineLogout/> Logout
              </Link>
            </li>
            ) : (
              <>
                <li>
                  <Link to='/Login'>
                    <AiOutlineLogin/> Login
                  </Link>
                </li>
                <li>
                  <Link to='/Register'>
                    <AiOutlineUserAdd/> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}