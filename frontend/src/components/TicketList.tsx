import { useStore } from 'zustand'
import { useUserState } from '../store/userState'
import { useEffect, useState } from 'react'
import { getTickets } from '../services/apiTicket'

export const TicketList = () => {
  const userState : any = useStore(useUserState)
  const [tickets, setTickets] = useState<any[]>([])
  const [message, setMessage] = useState('')

  const fetchTickets = async () => {
    try {
      const response = await getTickets(userState)
      if(response) {
        console.log(response.data)
        setTickets(response.data)
      } else {
        setMessage('There are no tickets')
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTickets();
  }, []);
  
  return(
    <>
      <a>{message}</a>
      <div>
        {tickets.map(ticket => (
          <div key={ticket._id}>
            {ticket.name} : {ticket.category}</div>
        ))}
      </div>
    </>
  )
}