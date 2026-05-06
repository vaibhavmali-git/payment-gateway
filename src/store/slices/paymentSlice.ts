import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaymentState, PaymentStatus, Transaction } from '@/types/payment';

const initialState: PaymentState = {
  status: 'idle',
  transactions: [],
  currentAttempt: 1,
  maxRetries: 3,
  transactionId: null,
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentStatus: (state, action: PayloadAction<PaymentStatus>) => {
      state.status = action.payload;
    },
    setTransactionId: (state, action: PayloadAction<string>) => {
      state.transactionId = action.payload;
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },
    incrementAttempt: (state) => {
      if (state.currentAttempt < state.maxRetries) {
        state.currentAttempt += 1;
        state.status = 'idle';
      }
    },
    resetPaymentFlow: (state) => {
      state.status = 'idle';
      state.currentAttempt = 1;
      state.transactionId = null;
    },
  },
});

export const { 
  setPaymentStatus, 
  setTransactionId, 
  addTransaction, 
  incrementAttempt, 
  resetPaymentFlow 
} = paymentSlice.actions;

export default paymentSlice.reducer;