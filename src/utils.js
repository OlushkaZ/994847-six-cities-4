export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  };

  return new Intl.DateTimeFormat(`en`, options).format(date);
};

