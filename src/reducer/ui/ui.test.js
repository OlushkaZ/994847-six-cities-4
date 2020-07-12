import {SortType} from '../../constants';
import {uiReducer, ActionCreator} from './ui';

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
};

it(`Reducer: sortOffers`, () => {
  expect(uiReducer(
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
  });

  expect(uiReducer(
      undefined,
      ActionCreator.sortOffers(SortType.TOP_RATED))
  ).toEqual({
    activeOfferLocation: null,
    currentSortType: SortType.TOP_RATED,
    showSortMenu: false,
  });
});

it(`Reducer: activeOfferLocation`, () => {
  expect(uiReducer(
      {},
      ActionCreator.activeOfferLocation(`1`))
  ).toEqual({activeOfferLocation: `1`});
});

it(`Reducer: showSortMenu`, () => {
  expect(uiReducer(
      {
        showSortMenu: false,
      },
      ActionCreator.showSortMenu(true))
  ).toEqual({showSortMenu: true});
});
