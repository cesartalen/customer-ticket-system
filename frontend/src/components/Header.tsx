import { AiFillHome, AiOutlineLogin, AiOutlineLogout, AiOutlineUserAdd, AiFillQuestionCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Header = () => {
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
          </ul>
        </div>
      </div>
    </>
  )
}