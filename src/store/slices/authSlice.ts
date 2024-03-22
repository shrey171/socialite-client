import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

interface IInitialState {
  user: {
    username: string,
    alias: string,
    email: string
  } | null;
  token: string | null;
}

const initialState: IInitialState = {
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer

export const selectUser = (state: RootState) => state.auth.user
export const selectToken = (state: RootState) => state.auth.token