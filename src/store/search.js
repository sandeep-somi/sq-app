import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    search: (state, action) => {
      state.query = action.payload;
    },
    clear: (state) => {
      state.query = '';
    }
  }
})

export const { search, clear } = searchSlice.actions;
export default searchSlice.reducer;