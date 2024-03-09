import { ChangeEvent, FormEvent, useState } from 'react'
import { CreateUserType } from '../types/userType'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState<CreateUserType>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')
    
    if(formValues.password !== formValues.passwordConfirm) {
      setError('Passwords do not match!')
    }

  }

  return ( 
    <>
      <div className='submit-form'>
        <div className='form-label'>
            <a className='form-title'>Registration</a>
            <a className='form-subtitle'>Create an account</a>
        </div>
        <div className='form-content'>
          <form onSubmit={handleSubmit}>
            {error && <div className='error-message'>{error}</div>}
            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Enter your username" value={formValues.name} required></input>
            <input onChange={handleChange} type="text" id="email" name="email" placeholder="Enter your email" value={formValues.email} required></input>
            <input onChange={handleChange} type="password" id="password" name="password" placeholder="Enter your password" value={formValues.password} required></input>
            <input onChange={handleChange} type="password" id="passwordConfirm" name="passwordConfirm"  placeholder="Confirm your password" value={formValues.passwordConfirm} required></input>
            <button>Submit</button>
          </form>
          <div className='form-register-link'>
            <Link to='/login'>
                <a>Already have an account?</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}