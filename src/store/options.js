import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  options: [],
  subOptions: [],
}

const options = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action) => {
      state.options = action.payload
    },
    setSubOptions: (state, action) => {
      state.subOptions = action.payload
    }
  }
});

export const {
  setOptions,
  setSubOptions,
} = options.actions

export default options.reducer