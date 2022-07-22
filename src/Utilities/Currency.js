export const toCurrency = (amount) => {
  return amount.toLocaleString('HNL', { currency: 'HNL', style: 'currency' }).replace('HNL', 'L');
}
