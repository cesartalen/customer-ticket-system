import { ChangeEvent, FormEvent, useState } from 'react'
import { LoginUserType } from '../types/userType'
import { Link } from 'react-router-dom'

export const LoginForm = () => {
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

  }

  return ( 
    <>
      <div className='submit-form'>
        <div className='form-label'>
          <a className='form-title'>Login</a>
          <a className='form-subtitle'>Access your account</a>
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