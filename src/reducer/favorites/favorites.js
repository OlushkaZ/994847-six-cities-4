import {fetchFavoritesOffers, changeStatusFavorites} from '../../api';

const initialState = {
  offers: [],
};

const ActionType = {
  SET_OFFERS: `SET_OFFERS`,
  REMOVE_FROM_BOOKMARK: `REMOVE_FROM_BOOKMARK`,
};

const ActionCreator = {
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),
  removeFromBookmark: (offerId) => ({
    type: ActionType.REMOVE_FROM_BOOKMARK,
    payload: {
      offerId,
    }
  }),
  loadFavoritesOffers: () => (dispatch) => {
    fetchFavoritesOffers()
      .then((offers) => {
        dispatch(ActionCreator.setOffers(offers));
      });
  },
  changeStatusFavorites: (offerId) => (dispatch) => {
    changeStatusFavorites(offerId, false)
      .then(() => {
        dispatch(ActionCreator.removeFromBookmark(offerId));
      });
  },
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.REMOVE_FROM_BOOKMARK:
      return Object.assign({}, state, {
        offers: state.offers
          .map((groupOffer) => Object.assign({}, groupOffer, {
            offers: groupOffer.offers.filter((cityOffer) => action.payload.offerId !== cityOffer.id)
          }))
          .filter((groupOffer) => groupOffer.offers.length > 0)
      });
    default:
      return state;
  }
};

export {favoritesReducer, ActionCreator};
