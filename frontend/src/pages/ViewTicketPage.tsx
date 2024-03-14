import { useParams } from 'react-router-dom'
import { closeTicket, createReply, getReplies, getSpecificTicket } from '../services/apiTicket'
import { useUserState } from '../store/userState'
import { useStore } from 'zustand'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { FetchTicketType, TicketReplyType } from '../types/ticketType'

export default function ViewTicketPage() {
  const userState : any = useStore(useUserState)
  const { id } = useParams()
  const [ticket, setTicket] = useState<FetchTicketType>()
  const [error, setError] = useState('')
  const [reply, setReply] = useState('')
  const [replies, setReplies] = useState<TicketReplyType[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReply(e.target.value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if(id) {
      await createReply(id, reply, userState).then(() => {
        setReply('')
        fetchReplies()
      })
    }
  }

  const handleCloseTicket = async (e: FormEvent) => {
    e.preventDefault()
    if(id) {
      await closeTicket(id, userState).then(() => {
        fetchTicket()
      })
    }
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

  const fetchReplies = async () => {
    try {
      if(id) {
        const response = await getReplies(id, userState)
        if(response) {
          setReplies(response.data)
        } else {
          setError('Could not fetch replies')
        }
      }
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTicket();
    fetchReplies();
  }, []);

  return (
    <>
      {error && <div className='error-message'>{error}</div>}

      {ticket ? (
        <div className='ticket-contents'>
          <div className='ticket-create-message'>
            <div className='submit-form'>
              {ticket.status ? (
                <button className='close-ticket-btn' onClick={handleCloseTicket} >Close Ticket</button>
              ): (
                <>
                </>
              )}
              <form>
                <div className='form-label'>
                {ticket.status ? (
                  <>
                    <a className='g-title'>{ticket.name}</a>
                    <a className='g-subtitle'>{ticket.category}</a>                  
                    <div className='form-content'>
                      <input type='text' name='message' value={reply} placeholder='Enter your reply' onChange={handleChange}></input>
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  </>
                ) : (
                  <>
                    <a className='g-title ticket-closed'>{ticket.name}</a>
                    <a className='g-subtitle ticket-closed'>{ticket.category}</a>                      
                  </>
                  )}
                  </div>
              </form>
            </div>
          </div>
          <div className='ticket-messages'>
            {replies.map(rep => (
              <>
                <div className='ticket-reply'>
                  <a className='ticket-responder'>{rep.isAdmin ? (
                   <>
                      Admin
                   </> 
                  ) : (
                    <>
                      User
                    </>
                  )}: </a>
                  <a>{rep.message}</a>
                </div>
              </>
            ))}
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