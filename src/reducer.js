import {getOffersInCity} from './utils';

const initialState = {
  currentLocation: {
    city: ``,
    cityCoordinates: [0, 0],
  },
  allOffers: [],
  currentOffers: [],
};

const ActionType = {
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`
};

const ActionCreator = {
  changeLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location,
  }),
  changeCurrentOffers: (city) => ({
    type: ActionType.CHANGE_CURRENT_OFFERS,
    payload: city,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return Object.assign({}, state, {currentLocation: action.payload});
    case ActionType.CHANGE_CURRENT_OFFERS:
      return Object.assign({}, state, {
        currentOffers: getOffersInCity(action.payload, state.allOffers),
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
