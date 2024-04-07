export const formatPrice = (price: string | number): string => {
  const priceNumber = typeof price === 'string' ? parseFloat(price) : price;

  return priceNumber.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
