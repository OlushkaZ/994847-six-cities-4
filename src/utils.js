const MAX_CITIES_COUNT = 6;

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    day: `numeric`,
    month: `long`,
    year: `numeric`,
  };

  return new Intl.DateTimeFormat(`en`, options).format(date);
};

export const getOffersInCity = (city, offers) => {
  return offers
    .find((offer) => offer.location.city === city)
    .offers;
};

export const getUniqueCities = (offers) => {
  const cities = new Set();
  offers.forEach((offer) => cities.add(offer.location.city));
  return [...cities].slice(0, MAX_CITIES_COUNT);
};
