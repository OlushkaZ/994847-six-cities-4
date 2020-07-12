import {getLocationsFromOffers} from '../../utils';
import {fetchHotels, changeStatusFavorites} from '../../api';

const initialState = {
  currentLocation: {
    city: ``,
    cityCoordinates: [0, 0],
  },
  allOffers: [],
  locations: [],
  isError: false,
};

const ActionType = {
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  SET_ALL_OFFERS: `SET_ALL_OFFERS`,
  SET_ERROR: `SET_ERROR`,
  SET_BOOKMARK: `SET_BOOKMARK`,
};

const ActionCreator = {
  changeLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location,
  }),
  setAllOffers: (allOffers) => ({
    type: ActionType.SET_ALL_OFFERS,
    payload: allOffers,
  }),
  setBookmark: (offerId, isBookmark) => ({
    type: ActionType.SET_BOOKMARK,
    payload: {
      offerId,
      isBookmark
    }
  }),
  changeStatusFavorites: (offerId, isBookmark) => (dispatch) => {
    changeStatusFavorites(offerId, isBookmark)
      .then(() => {
        dispatch(ActionCreator.setBookmark(offerId, isBookmark));
      });
  },
  loadOffers: () => (dispatch) => {
    fetchHotels()
      .then((hotels) => {
        dispatch(ActionCreator.setAllOffers(hotels));
        dispatch(ActionCreator.changeLocation(hotels[0].location));
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
    case ActionType.SET_ALL_OFFERS:
      return Object.assign({}, state, {
        allOffers: action.payload,
        locations: getLocationsFromOffers(action.payload),
      });
    case ActionType.SET_ERROR:
      return Object.assign({}, state, {
        isError: action.payload,
      });
    case ActionType.SET_BOOKMARK:
      return Object.assign({}, state, {
        allOffers: state.allOffers.map((offer) => action.payload.offerId === offer.id
          ? Object.assign({}, offer, {
            isBookmark: action.payload.isBookmark
          })
          : offer
        )
      });
    default:
      return state;
  }
};

export {dataReducer, ActionCreator};
