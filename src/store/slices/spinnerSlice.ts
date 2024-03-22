import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

interface IInitialState {
  loading: boolean;
}

const initialState: IInitialState = {
  loading: false
}

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    setSpinnerState: (state, action) => {
      const { loading } = action.payload;
      state.loading = loading || false;
    }
  }
})

export const { setSpinnerState } = spinnerSlice.actions
export default spinnerSlice.reducer

export const selectLoading = (state: RootState) => state.spinner.loading