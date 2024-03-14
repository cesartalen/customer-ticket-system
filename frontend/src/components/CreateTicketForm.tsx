import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { createTicket, getCategories } from '../services/apiTicket'
import { CreateTicketFormType } from '../types/ticketType'
import { useStore } from 'zustand'
import { useUserState } from '../store/userState'

export const CreateTicketForm = () => {
  const userState : any = useStore(useUserState)
  const [categories, setCategories] = useState<string[]>([])
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [name, setName] = useState('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data : CreateTicketFormType = {
      name: name,
      category: selectedCategory,
    }

    createTicket(data, userState)
    setMessage('Ticket submitted')
    setName('')
  }

  const fetchCategories = async () => {
    try {
      const response = await getCategories()
      setCategories((await response).data)
      
      // Setting the first category as selected by default
      if(response.data.length > 0) {
        setSelectedCategory(response.data[0])
      }
    } catch {
      setError('Could not fetch categories from the server')
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return(
    <>
      <div className='submit-form'>
        <div className='form-label'>
            <a className='g-title'>Create ticket</a>
            <a className='g-subtitle'>Create a new ticket to get help with your issue</a>
          </div>
        <div className='form-content'>
          <form onSubmit={handleSubmit}>
            {error && <div className='error-message'>{error}</div>}
            {message && <div className='status-message'>{message}</div>}
            <select value={selectedCategory} onChange={handleCategoryChange} required>
              {categories.map(category => (
               <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input type='text' value={name} onChange={handleNameChange} placeholder='Enter ticket name' required></input>
            <button>Create</button>
          </form>
        </div>
      </div>
    </>
  )
}