import axios from 'axios'
import { TICKET_CREATE_API, TICKET_GET_CATEGORIES, TICKET_GET_REPLIES, TICKET_GET_SPECIFIC_TICKET, TICKET_GET_TICKETS } from '../statics/apiUrls'
import { getToken } from './apiUser'
import { CreateTicketFormType } from '../types/ticketType'

export const createTicket = async (formValues: CreateTicketFormType, userState: any) => {
  try {
    const token = getToken(userState)
    if(!token == false) {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }

      const ticketData = {
        name: formValues.name,
        category: formValues.category,
        user: userState.id,
      }
      await axios.post(TICKET_CREATE_API, ticketData, { headers })
    }
  } catch (error) {
    console.error(error)
  }
}

export const getTickets = async (userState: any) => {
  try {
    const token = getToken(userState)
    if(!token == false) {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }

      const response = await axios.get<string[]>(TICKET_GET_TICKETS, { headers })
      return response
    }
  } catch {
    return false
  }
}

export const getSpecificTicket = async (ticketId : string, userState: any) => {
  try {
    const token = getToken(userState)
    if(!token == false) {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }

      const response = await axios.get(TICKET_GET_SPECIFIC_TICKET(ticketId), { headers })
      return response
    }
  } catch {
    return false
  }
}

export const getCategories = async () => {
  const response = await axios.get<string[]>(TICKET_GET_CATEGORIES);
  return response
}

export const getReplies = async (id: string, userState: any) => {
  try {
    const token = getToken(userState)
    if(!token == false) {
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      }

      const response = await axios.get(TICKET_GET_REPLIES(id), { headers })
      return response
    }
  } catch {
    return false
  }
}