export type PaymentStatus = 'idle' | 'processing' | 'success' | 'failed' | 'timeout';

export type CardType = 'visa' | 'mastercard' | 'amex' | 'unknown';

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  timestamp: number;
  errorMessage?: string;
}

export interface PaymentState {
  status: PaymentStatus;
  transactions: Transaction[];
  currentAttempt: number;
  maxRetries: number;
  transactionId: string | null;
}