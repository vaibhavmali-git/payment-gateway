import { CardType } from '@/types/payment';

export const validateCardNumber = (cardNumber: string): string | null => {
  const cleanNumber = cardNumber.replace(/\D/g, '');
  if (!cleanNumber) return 'Card number is required';
  
  if (cleanNumber.length < 15 || cleanNumber.length > 16) {
    return 'Card number must be 15 or 16 digits';
  }
  return null;
};

export const validateExpiry = (expiry: string): string | null => {
  if (!expiry) return 'Expiry date is required';
  
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
    return 'Invalid format (MM/YY)';
  }

  const [monthStr, yearStr] = expiry.split('/');
  const month = parseInt(monthStr, 10);
  const year = parseInt(`20${yearStr}`, 10); 

  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return 'Card has expired';
  }

  return null;
};

export const validateCVV = (cvv: string, cardType: CardType): string | null => {
  const cleanCVV = cvv.replace(/\D/g, '');
  if (!cleanCVV) return 'CVV is required';
  
  const expectedLength = cardType === 'amex' ? 4 : 3;
  if (cleanCVV.length !== expectedLength) {
    return `CVV must be ${expectedLength} digits`;
  }
  return null;
};

export const validateName = (name: string): string | null => {
  if (!name.trim()) return 'Cardholder name is required';
  if (name.trim().length < 2) return 'Please enter a valid name';
  return null;
};

export const validateAmount = (amount: string | number): string | null => {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(numAmount) || numAmount <= 0) {
    return 'Amount must be greater than 0';
  }
  return null;
};