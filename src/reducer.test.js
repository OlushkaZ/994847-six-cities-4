import {reducer, ActionCreator} from './reducer';
import {SortType} from './constants';

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


it(`Reducer: sortOffers`, () => {
  expect(reducer(
      initialState,
      ActionCreator.sortOffers(SortType.POPULAR))
  ).toEqual({
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
    currentSortType: SortType.POPULAR,
    currentOffers: [
      {
        id: 0,
        coordinates: [1, 2],
        name: `My Offer`,
      },
    ],
  });

  expect(reducer(
      {
        currentOffers: [
          {
            rating: 0.5
          },
          {
            rating: 1
          },
        ],
      },
      ActionCreator.sortOffers(SortType.TOP_RATED))
  ).toEqual({
    currentSortType: SortType.TOP_RATED,
    currentOffers: [
      {
        rating: 1
      },
      {
        rating: 0.5
      },
    ],
  });
});

it(`Reducer: activeOfferLocation`, () => {
  expect(reducer(
      {},
      ActionCreator.activeOfferLocation(`1`))
  ).toEqual({activeOfferLocation: `1`});
});

it(`Reducer: showSortMenu`, () => {
  expect(reducer(
      {
        showSortMenu: false,
      },
      ActionCreator.showSortMenu(true))
  ).toEqual({showSortMenu: true});
});
