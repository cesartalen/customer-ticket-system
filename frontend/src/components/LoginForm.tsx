import { ChangeEvent, FormEvent, useState } from 'react'
import { LoginUserType } from '../types/userType'

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
      <div>
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input onChange={handleChange} type="text" id="name" name="name" value={formValues.name} required></input>
          <input onChange={handleChange} type="text" id="password" name="password" value={formValues.password} required></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}