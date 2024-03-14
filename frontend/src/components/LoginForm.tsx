import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { LoginUserType } from '../types/userType'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/apiUser'
import { useUserState } from '../store/userState'
import { useStore } from 'zustand'


export const LoginForm = () => {
  const navigate = useNavigate()
  const userState : any = useStore(useUserState)

  useEffect(() => {
    if (userState.status === true) {
      navigate('/');
    }
  }, [userState.status]);
  
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState<LoginUserType>({
    name: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    try {
      loginUser(formValues, userState)
    } catch {
      setError('Could not sign in')
    }
  }

  return ( 
    <>
      <div className='submit-form'>
        <div className='form-label'>
          <a className='g-title'>Login</a>
          <a className='g-subtitle'>Access your account</a>
        </div>
        <div className='form-content'>
          <form onSubmit={handleSubmit}>
          {error && <div className='error-message'>{error}</div>}
            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Enter your username" value={formValues.name} required></input>
            <input onChange={handleChange} type="password" id="password" name="password" placeholder="Enter your password" value={formValues.password} required></input>
            <button>Submit</button>
          </form>
          <div className='form-register-link'>
            <Link to='/register'>
              <a>Register an account</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}