import { ChangeEvent, FormEvent, useState } from 'react'
import { CreateUserType } from '../types/userType'

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

    if(formValues.password !== formValues.passwordConfirm) {
      setError('Passwords do not match!')
    }

  }

  return ( 
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input onChange={handleChange} type="text" id="name" name="name" value={formValues.name} required></input>
          <input onChange={handleChange} type="text" id="email" name="email" value={formValues.email} required></input>
          <input onChange={handleChange} type="text" id="password" name="password" value={formValues.password} required></input>
          <input onChange={handleChange} type="text" id="passwordConfirm" name="passwordConfirm" value={formValues.passwordConfirm} required></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}