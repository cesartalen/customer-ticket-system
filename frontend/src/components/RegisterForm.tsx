import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { CreateUserFormType, CreateUserType } from '../types/userType'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/apiUser'
import { useUserState } from '../store/userState'
import { useStore } from 'zustand'

export const RegisterForm = () => {
  const navigate = useNavigate()
  const userState : any = useStore(useUserState)

  useEffect(() => {
    if (userState.status === true) {
      navigate('/');
    }
  }, [userState.status]);

  const [error, setError] = useState('')
  const [message, setMessage] = useState('');
  const [formValues, setFormValues] = useState<CreateUserFormType>({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    
    if(formValues.password !== formValues.passwordConfirm) {
      setError('Passwords do not match!')
    } else {
      const registerData : CreateUserType = {
        email: formValues.email,
        name: formValues.name,
        password: formValues.password,
      }
      try {
        const status = await registerUser(registerData, userState);
        switch(status) {
          case true:
            setMessage('Account created, you can now login!');
            break;
          case 400:
            setError('Account already exists!');
            break;
          case 401:
            setError('Registration failed, please try again!')
            break;
        }
      } catch (error) {
        console.error(error)
      }
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
            {message && <div className='status-message'>{message}</div>}
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