import { CardType } from '@/types/payment';

export const detectCardType = (cardNumber: string): CardType => {

    const cleanNumber = cardNumber.replace(/\D/g, '');

    if (/^4/.test(cleanNumber)) return 'visa';
    if (/^5[1-5]/.test(cleanNumber)) return 'mastercard';
    if (/^3[47]/.test(cleanNumber)) return 'amex';

    return 'unknown';
};

export const formatCardNumber = (value: string): string => {
    const cleanValue = value.replace(/\D/g, '');

    const match = cleanValue.match(/.{1,4}/g);
    return match ? match.join(' ') : cleanValue;
};

export const formatExpiry = (value: string): string => {
    const cleanValue = value.replace(/\D/g, '');

    if (cleanValue.length >= 2) {
        return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`;
    }
    return cleanValue;
};