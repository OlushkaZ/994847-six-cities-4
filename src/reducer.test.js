import {reducer, ActionCreator} from './reducer';

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
};

it(`Reducer: initialState`, () => {
  expect(reducer(initialState, {type: ``})).toEqual(initialState);
});

it(`Reducer: changeLocation`, () => {
  expect(reducer(initialState, ActionCreator.changeLocation({
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
  });
});

it(`Reducer: changeCurrentOffers`, () => {
  expect(reducer(initialState, ActionCreator.changeCurrentOffers(`Acme`))).toEqual({
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
  });
});
