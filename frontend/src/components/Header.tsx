import { AiFillHome, AiOutlineLogin, AiOutlineLogout, AiOutlineUserAdd, AiFillQuestionCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useStore } from 'zustand'
import { useUserState } from '../store/userState'     


export const Header = () => {
  const userState = useStore(useUserState)
  console.log(userState.status)
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
            <li>
              <Link to='/Login'>
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