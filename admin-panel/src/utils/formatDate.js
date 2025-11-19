export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("az-AZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
