const initialState = {
  currentSortType: `Popular`,
  activeOfferLocation: null,
  showSortMenu: false,
};

const ActionType = {
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SHOW_SORT_MENU: `SHOW_SORT_MENU`,
};

const ActionCreator = {
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
  }),
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_OFFERS:
      return Object.assign({}, state, {
        currentSortType: action.payload,
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

export {uiReducer, ActionType, ActionCreator};
