import {dataReducer, ActionCreator} from './data';

const initialState = {
  currentLocation: {
    city: `Acme`,
    cityCoordinates: [1, 2],
  },
  allOffers: [
    {
      location: {
        city: `Acme`,
        cityCoordinates: [1.01, 2.01],
      },
      offers: [
        {
          id: 0,
          coordinates: [1, 2],
          name: `My Offer`,
        },
      ]
    },
    {
      location: {
        city: `Gotham`,
        cityCoordinates: [2.01, 3.01],
      },
      offers: [
        {
          id: 0,
          coordinates: [1, 2],
          name: `Bad Offer`,
        },
      ]
    }
  ],
  currentOffers: [],
  isError: false,
  newReview: {
    rating: ``,
    review: ``,
  },
  reviews: [],
  isReviewCreating: false,
};

it(`Reducer: initialState`, () => {
  expect(dataReducer(initialState, {type: ``})).toEqual(initialState);
});

it(`Reducer: changeLocation`, () => {
  expect(dataReducer(initialState, ActionCreator.changeLocation({
    city: `Gotham`,
    cityCoordinates: [0, 0]
  }))).toEqual({
    currentLocation: {
      city: `Gotham`,
      cityCoordinates: [0, 0]
    },
    allOffers: [
      {
        location: {
          city: `Acme`,
          cityCoordinates: [1.01, 2.01],
        },
        offers: [
          {
            id: 0,
            coordinates: [1, 2],
            name: `My Offer`,
          },
        ]
      },
      {
        location: {
          city: `Gotham`,
          cityCoordinates: [2.01, 3.01],
        },
        offers: [
          {
            id: 0,
            coordinates: [1, 2],
            name: `Bad Offer`,
          },
        ]
      }
    ],
    currentOffers: [],
    isError: false,
    newReview: {
      rating: ``,
      review: ``,
    },
    reviews: [],
    isReviewCreating: false,
  });
});

it(`Reducer: changeCurrentOffers`, () => {
  expect(dataReducer(initialState, ActionCreator.changeCurrentOffers(`Acme`))).toEqual({
    currentLocation: {
      city: `Acme`,
      cityCoordinates: [1, 2],
    },
    allOffers: [
      {
        location: {
          city: `Acme`,
          cityCoordinates: [1.01, 2.01],
        },
        offers: [
          {
            id: 0,
            coordinates: [1, 2],
            name: `My Offer`,
          },
        ]
      },
      {
        location: {
          city: `Gotham`,
          cityCoordinates: [2.01, 3.01],
        },
        offers: [
          {
            id: 0,
            coordinates: [1, 2],
            name: `Bad Offer`,
          },
        ]
      }
    ],
    currentOffers: [
      {
        id: 0,
        coordinates: [1, 2],
        name: `My Offer`,
      }
    ],
    isError: false,
    newReview: {
      rating: ``,
      review: ``,
    },
    reviews: [],
    isReviewCreating: false,
  });
});

it(`Reducer: setAllOffers`, () => {
  expect(dataReducer(undefined, ActionCreator.setAllOffers([
    {
      location: {
        city: `Acme`,
        cityCoordinates: [1.01, 2.01],
      },
      offers: [
        {
          id: 0,
          coordinates: [1, 2],
          name: `My Offer`,
        },
      ]
    },
    {
      location: {
        city: `Gotham`,
        cityCoordinates: [2.01, 3.01],
      },
      offers: [
        {
          id: 0,
          coordinates: [1, 2],
          name: `Bad Offer`,
        },
      ]
    }
  ]))).toEqual({
    currentLocation: {
      city: ``,
      cityCoordinates: [0, 0],
    },
    allOffers: [
      {
        location: {
          city: `Acme`,
          cityCoordinates: [1.01, 2.01],
        },
        offers: [
          {
            id: 0,
            coordinates: [1, 2],
            name: `My Offer`,
          },
        ]
      },
      {
        location: {
          city: `Gotham`,
          cityCoordinates: [2.01, 3.01],
        },
        offers: [
          {
            id: 0,
            coordinates: [1, 2],
            name: `Bad Offer`,
          },
        ]
      }
    ],
    currentOffers: [],
    locations: [
      {
        city: `Acme`,
        cityCoordinates: [1.01, 2.01],
      },
      {
        city: `Gotham`,
        cityCoordinates: [2.01, 3.01],
      },
    ],
    isError: false,
    newReview: {
      rating: ``,
      review: ``,
    },
    reviews: [],
    isReviewCreating: false,
  });
});

it(`Reducer: setReviewCreating`, () => {
  expect(dataReducer(undefined, ActionCreator.setReviewCreating(true))).toEqual({
    currentLocation: {
      city: ``,
      cityCoordinates: [0, 0],
    },
    allOffers: [],
    currentOffers: [],
    locations: [],
    isError: false,
    newReview: {
      rating: ``,
      review: ``,
    },
    reviews: [],
    isReviewCreating: true,
  });
});

it(`Reducer: setReviewCreating`, () => {
  expect(dataReducer(undefined, ActionCreator.changeFieldReview({target: {value: `123`, name: `review`}}))).toEqual({
    currentLocation: {
      city: ``,
      cityCoordinates: [0, 0],
    },
    allOffers: [],
    currentOffers: [],
    locations: [],
    isError: false,
    newReview: {
      rating: ``,
      review: `123`,
    },
    reviews: [],
    isReviewCreating: false,
  });
});
