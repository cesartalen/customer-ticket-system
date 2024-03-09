import { create } from 'zustand'
import {ThisUser, UpdateThisUser} from '../types/userType'

export const useUserState = create<ThisUser & UpdateThisUser>((set) => ({
  name: '',
  status: false,
  UpdateName: (name) => set(() => ({name: name})),
  UpdateStatus: (status) => set(() => ({status: status})),
}))