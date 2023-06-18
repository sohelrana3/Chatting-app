import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/user/userSlice'

export const store = configureStore({
  reducer: {
    loggedUser: counterReducer,
  },
})
