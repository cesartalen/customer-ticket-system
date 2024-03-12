import axios from 'axios'
import { TICKET_CREATE_API, TICKET_GET_CATEGORIES } from '../statics/apiUrls'
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

export const getCategories = async () => {
  const response = await axios.get<string[]>(TICKET_GET_CATEGORIES);
  return response
}