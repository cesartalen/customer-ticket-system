import { Link } from 'react-router-dom'

export default function HomePage() {
  return(
    <>
      <div className='home-contents'>
        <div className='home-labels'>
          <a className='home-title'>Login to create a ticket</a>
          <a className='home-subtitle'>Read the FAQ before submitting a ticket</a>
        </div>
        <div className='home-options'>
          <div><Link to='/login'><button>Login</button></Link></div>
          <div><Link to='/register'><button>Register</button></Link></div>
          <div><Link to='/faq'><button>FAQ</button></Link></div>
        </div>
      </div>
    </>
  )
}