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
  isError: false,
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
    isError: false,
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
  });
});
