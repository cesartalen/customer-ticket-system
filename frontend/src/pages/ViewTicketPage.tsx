import { useParams } from 'react-router-dom'
import { getSpecificTicket } from '../services/apiTicket'
import { useUserState } from '../store/userState'
import { useStore } from 'zustand'
import { ChangeEvent, useEffect, useState } from 'react'
import { FetchTicketType } from '../types/ticketType'

export default function ViewTicketPage() {
  const userState : any = useStore(useUserState)
  const { id } = useParams()
  const [ticket, setTicket] = useState<FetchTicketType>()
  const [error, setError] = useState('')
  const [reply, setReply] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value)
  }

  const fetchTicket = async () => {
    try {
      if(id){
        const response = await getSpecificTicket(id, userState)
        if(response) {
          setTicket(response.data)
        } else {
          setError('Could not fetch ticket')
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <>
      {error && <div className='error-message'>{error}</div>}

      {ticket ? (
        <div className='ticket-contents'>
          <div className='ticket-create-message'>
            <div className='submit-form'>
              <form>
                <div className='form-label'>
                  <a className='form-title'>{ticket.name}</a>
                  <a className='form-subtitle'>{ticket.category}</a>
                </div>
                <div className='form-content'>
                  <input type='text' name='message' placeholder='Enter your reply' onChange={handleChange}></input>
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className='ticket-messages'>

          </div>
        </div>

        ) : (
          <>
          </>
        )
      }
    </>
  )
}