import { create } from 'zustand'
import {ThisUser, UpdateThisUser} from '../types/userType'
import { createJSONStorage, persist } from 'zustand/middleware';

export const useUserState = create(
  persist(
    (set) => ({
      name: '',
      token: '',
      status: false,
      UpdateName: (name: any) => set(() => ({ name })),
      UpdateToken: (token: any) => set(() => ({ token })),
      UpdateStatus: (status: any) => set(() => ({ status })),
    }),
    {
      name: 'user-state',
    },
  ),
);