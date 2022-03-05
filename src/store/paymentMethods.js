import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  paymentMethods: [],
}

const paymentMethods = createSlice({
  name: 'payment-methods',
  initialState,
  reducers: {
    setPaymentMethods: (state, action) => {
      state.paymentMethods = action.payload
    }
  }
});

export const {
  setPaymentMethods,
} = paymentMethods.actions

export default paymentMethods.reducer