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