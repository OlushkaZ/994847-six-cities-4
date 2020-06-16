export default [
  {
    id: 1,
    img: `img/apartment-01.jpg`,
    price: 120,
    rating: `80%`,
    name: `Beautiful luxurious apartment at great location`,
    type: `apartment`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  },

  {
    id: 2,
    img: `img/apartment-02.jpg`,
    price: 132,
    rating: `70%`,
    name: `Canal View Prinsengracht`,
    type: `hotel`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  },

  {
    id: 3,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: `100%`,
    name: `Nice, cozy, warm big bed apartment`,
    type: `house`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  },

  {
    id: 4,
    img: `img/apartment-01.jpg`,
    price: 80,
    rating: `60%`,
    name: `Wood and stone place`,
    type: `hostel`,
    isPremium: Boolean(Math.round(Math.random())),
    isBookmark: Boolean(Math.round(Math.random())),
  }
];
