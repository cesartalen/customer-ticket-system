import axios from 'axios'
import { useEffect, useState } from 'react'
import { getCategories } from '../services/apiTicket'

export const CreateTicketForm = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [error, setError] = useState('')

  const fetchCategories = async () => {
    try {
      const response = await getCategories()
      setCategories((await response).data)
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
            <a className='form-title'>Create ticket</a>
            <a className='form-subtitle'>Create a new ticket to get help with your issue</a>
          </div>
        <div className='form-content'>
          <form>
            {error && <div className='error-message'>{error}</div>}
            <select>
              {categories.map(category => (
               <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input></input>
          </form>
        </div>
      </div>
    </>
  )
}