const API_ROOT = 'http://localhost:8080'

// User API
export const USER_LOGIN_API = `${API_ROOT}/api/users/login`
export const USER_REGISTER_API = `${API_ROOT}/api/users/signUp`


// Ticket API
export const TICKET_CREATE_API = `${API_ROOT}/api/tickets/createTicket`
export const TICKET_GET_TICKETS = `${API_ROOT}/api/tickets/tickets`
export const TICKET_GET_CATEGORIES = `${API_ROOT}/api/tickets/categories`
export const TICKET_GET_SPECIFIC_TICKET = (id: string) => `${API_ROOT}/api/tickets/tickets/${id}`

// Ticket Replies
export const TICKET_GET_REPLIES = (id: string) => `${API_ROOT}/api/tickets/reply/${id}`
export const TICKET_CREATE_REPLIES = (id: string) => `${API_ROOT}/api/tickets/reply/${id}`