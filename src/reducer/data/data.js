import {getOffersInCity, getLocationsFromOffers, isValidReview} from '../../utils';
import {fetchHotels, fetchComments, createReview} from '../../api';

const initialState = {
  currentLocation: {
    city: ``,
    cityCoordinates: [0, 0],
  },
  allOffers: [],
  currentOffers: [],
  locations: [],
  isError: false,
  newReview: {
    rating: ``,
    review: ``,
  },
  reviews: [],
  isReviewCreating: false,
};

const ActionType = {
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`,
  SET_ALL_OFFERS: `SET_ALL_OFFERS`,
  SET_ERROR: `SET_ERROR`,
  SET_REVIEWS: `SET_REVIEWS`,
  CHANGE_FIELD_REVIEW: `CHANGE_FIELD_REVIEW`,
  SET_REVIEW_CREATING: `SET_REVIEW_CREATING`,
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
  setReviewCreating: (isReviewCreating) => ({
    type: ActionType.SET_REVIEW_CREATING,
    payload: isReviewCreating
  }),
  changeFieldReview: (evt) => ({
    type: ActionType.CHANGE_FIELD_REVIEW,
    payload: {
      value: evt.target.value,
      field: evt.target.name,
    }
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
  getReviews: (offerId) => (dispatch) => {
    fetchComments(offerId)
      .then((reviews) => {
        dispatch(ActionCreator.setReviews(reviews));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
      });
  },
  setReviews: (reviews) => ({
    type: ActionType.SET_REVIEWS,
    payload: reviews,
  }),
  publishReview: (evt, match) => (dispatch, getState) => {
    const {data} = getState();

    evt.preventDefault();

    if (!isValidReview(data.newReview) || data.isReviewCreating) {
      return;
    }

    dispatch(ActionCreator.setReviewCreating(true));
    createReview(
        match.params.id,
        data.newReview.rating,
        data.newReview.review
    )
      .then((reviews) => {
        dispatch(ActionCreator.setReviews(reviews));
        dispatch(ActionCreator.setReviewCreating(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setError(true));
        dispatch(ActionCreator.setReviewCreating(false));
      });
  },
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
    case ActionType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
        newReview: {
          rating: ``,
          review: ``,
        },
      });
    case ActionType.CHANGE_FIELD_REVIEW:
      return Object.assign({}, state, {
        newReview: Object.assign({}, state.newReview, {
          [action.payload.field]: action.payload.value,
        }),
      });
    case ActionType.SET_REVIEW_CREATING:
      return Object.assign({}, state, {
        isReviewCreating: action.payload,
      });
    default:
      return state;
  }
};

export {dataReducer, ActionType, ActionCreator};
