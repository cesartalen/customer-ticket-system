export type CreateTicketFormType = {
  name: string,
  category: string,
}

export type FetchTicketType = {
  __v: number;
  _id: string;
  category: string;
  createdAt: string;
  name: string;
  status: boolean;
  updatedAt: string;
  user: string;
}

export type TicketReplyType = {
  _id: string;
  user: string;
  isAdmin: boolean;
  ticket: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}