export const formatMoney = (amount) => {
  return new Intl.NumberFormat("az-AZ", {
    style: "currency",
    currency: "AZN",
  }).format(amount);
};
