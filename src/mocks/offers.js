export const RENTAL_OFFERS_NAMES = [
  `Beautiful  luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Amazing apartment for your cat`
];

export const RentalFeature = {
  WIFI: `Wi-Fi`,
  PARKING: `Parking`,
  HEATING: `Heating`,
  KITCHEN: `Kitchen`,
  CABLETV: `Cable TV`,
  DISHWASHER: `Dishwasher`,
  WASHINGMACHINE: `Washing machine`,
  DRYER: `Dryer`,
};

export const OFFER_TYPES_DISPLAY = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

export const OFFER_CARDS = [
  {
    id: 1,
    img: `/img/apartment-01.jpg`,
    imgDetails: [
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/apartment-small-03.jpg`,
      `/img/apartment-small-04.jpg`,
      `/img/room.jpg`
    ],
    price: 121,
    rating: `80%`,
    ratingDetails: 4.3,
    name: `Beautiful luxurious apartment at great location`,
    type: `apartment`,
    roomCountDetails: 2,
    maxGuestsDetails: 2,
    featuresDetails: [RentalFeature.WASHINGMACHINE, RentalFeature.KITCHEN],
    host: {
      hostName: `Maria`,
      photo: `/img/avatar-angelina.jpg`,
      isSuper: Boolean(Math.round(Math.random())),
    },
    description: `Featuring free WiFi, Martelli 6 Suite and apartments offers accommodations in Florence. Santa Maria del Fiore is 328 feet away.`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  },

  {
    id: 2,
    img: `/img/apartment-02.jpg`,
    imgDetails: [
      `/img/room.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-03.jpg`,
      `/img/apartment-small-03.jpg`,
      `/img/apartment-small-04.jpg`,
    ],
    price: 132,
    rating: `70%`,
    ratingDetails: 3.5,
    name: `Canal View Prinsengracht`,
    type: `room`,
    roomCountDetails: 45,
    maxGuestsDetails: 3,
    featuresDetails: [RentalFeature.WIFI, RentalFeature.CABLETV],
    host: {
      hostName: `Camilla`,
      photo: `/img/avatar-angelina.jpg`,
      isSuper: Boolean(Math.round(Math.random())),
    },
    description: `Located 656 feet from Strozzi Palace and 2297 feet from Santa Maria Novella, Tornabuoni Place in Florence features air-conditioned accommodations with views of the city and free WiFi.`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  },

  {
    id: 3,
    img: `/img/apartment-03.jpg`,
    imgDetails: [
      `/img/apartment-01.jpg`,
      `/img/room.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-small-03.jpg`,
      `/img/apartment-03.jpg`,
      `/img/apartment-small-04.jpg`,
    ],
    price: 180,
    rating: `100%`,
    ratingDetails: 4.9,
    name: `Nice, cozy, warm big bed apartment`,
    type: `house`,
    roomCountDetails: 4,
    maxGuestsDetails: 4,
    featuresDetails: [RentalFeature.PARKING, RentalFeature.KITCHEN],
    host: {
      hostName: `Ann`,
      photo: `/img/avatar-angelina.jpg`,
      isSuper: Boolean(Math.round(Math.random())),
    },
    description: `Located in Florence, Palazzo dei Conti Residenza d'Epoca provides accommodations with a seating area and flat-screen TV. Free WiFi is provided.`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  },

  {
    id: 4,
    img: `img/apartment-01.jpg`,
    imgDetails: [
      `/img/apartment-03.jpg`,
      `/img/room.jpg`,
      `/img/apartment-02.jpg`,
      `/img/apartment-01.jpg`,
      `/img/apartment-small-04.jpg`,
      `/img/apartment-small-03.jpg`,
    ],
    price: 80,
    rating: `60%`,
    ratingDetails: 2.9,
    name: `Wood and stone place`,
    type: `hotel`,
    roomCountDetails: 3,
    maxGuestsDetails: 5,
    featuresDetails: [RentalFeature.WIFI, RentalFeature.HEATING],
    host: {
      hostName: `Lina`,
      photo: `/img/avatar-angelina.jpg`,
      isSuper: Boolean(Math.round(Math.random())),
    },
    description: `Set in the same Gothic 14th-century building as the Museo del Bigallo, B&B Soggiorno Battistero is just opposite Florence Cathedral.`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  }
];
