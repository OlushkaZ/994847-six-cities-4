import {getOffersInCity, getLocationsFromOffers} from '../../utils';
import {fetchHotels} from '../../api';

const initialState = {
  currentLocation: {
    city: ``,
    cityCoordinates: [0, 0],
  },
  allOffers: [],
  currentOffers: [],
  locations: [],
  isError: false
};

const ActionType = {
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`,
  SET_ALL_OFFERS: `SET_ALL_OFFERS`,
  SET_ERROR: `SET_ERROR`,
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
  setAllOffers: (allOffers) => ({
    type: ActionType.SET_ALL_OFFERS,
    payload: allOffers,
  }),
  loadOffers: () => (dispatch) => {
    fetchHotels()
      .then((hotels) => {
        dispatch(ActionCreator.setAllOffers(hotels));
        dispatch(ActionCreator.changeLocation(hotels[0].location));
        dispatch(ActionCreator.changeCurrentOffers(hotels[0].location.city));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
  setError: (isError) => ({
    type: ActionType.SET_ERROR,
    payload: isError,
  }),
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return Object.assign({}, state, {currentLocation: action.payload});
    case ActionType.CHANGE_CURRENT_OFFERS:
      return Object.assign({}, state, {
        currentOffers: getOffersInCity(action.payload, state.allOffers),
      });
    case ActionType.SET_ALL_OFFERS:
      return Object.assign({}, state, {
        allOffers: action.payload,
        locations: getLocationsFromOffers(action.payload),
      });
    case ActionType.SET_ERROR:
      return Object.assign({}, state, {
        isError: action.payload,
      });
    default:
      return state;
  }
};

export {dataReducer, ActionType, ActionCreator};
