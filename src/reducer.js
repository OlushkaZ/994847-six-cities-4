import {SortType} from './constants';
import {getOffersInCity, getSortedOffers} from './utils';

const initialState = {
  currentLocation: {
    city: ``,
    cityCoordinates: [0, 0],
  },
  allOffers: [],
  currentOffers: [],
  locations: [],
  currentSortType: ``,
  activeOfferLocation: null,
  showSortMenu: false,
};

const ActionType = {
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`,
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SHOW_SORT_MENU: `SHOW_SORT_MENU`,
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
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType,
  }),
  activeOfferLocation: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer
  }),
  showSortMenu: (isShown) => ({
    type: ActionType.SHOW_SORT_MENU,
    payload: isShown,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return Object.assign({}, state, {currentLocation: action.payload});
    case ActionType.CHANGE_CURRENT_OFFERS:
      return Object.assign({}, state, {
        currentOffers: getOffersInCity(action.payload, state.allOffers),
      });
    case ActionType.SORT_OFFERS:
      return Object.assign({}, state, {
        currentSortType: action.payload,
        currentOffers: action.payload === SortType.POPULAR
          ? getOffersInCity(state.currentLocation.city, state.allOffers)
          : getSortedOffers(state.currentOffers, action.payload),
      });
    case ActionType.SET_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOfferLocation: action.payload,
      });

    case ActionType.SHOW_SORT_MENU:
      return Object.assign({}, state, {
        showSortMenu: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
