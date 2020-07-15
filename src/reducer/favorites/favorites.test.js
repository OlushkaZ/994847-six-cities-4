import {favoritesReducer, ActionCreator} from './favorites';

it(`Reducer: setOffers`, () => {
  expect(favoritesReducer(
      undefined,
      ActionCreator.setOffers([
        {
          location: {
            city: ``,
            cityCoordinates: [0, 0]
          },
          offers: [
            {
              id: 1
            }
          ]
        }
      ]))
  ).toEqual({
    offers: [
      {
        location: {
          city: ``,
          cityCoordinates: [0, 0]
        },
        offers: [
          {
            id: 1
          }
        ]
      }
    ],
  });
});

it(`Reducer: removeFromBookmark`, () => {
  expect(favoritesReducer(
      {
        offers: [
          {
            location: {
              city: ``,
              cityCoordinates: [0, 0]
            },
            offers: [
              {
                id: 1
              }
            ]
          }
        ]
      },
      ActionCreator.removeFromBookmark(1))
  ).toEqual({
    offers: []
  });
});
