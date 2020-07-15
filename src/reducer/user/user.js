import {login, checkAuth} from "../../api";

const initialState = {
  authorizationStatus: `NO_AUTH`,
  email: ``,
  password: ``
};

const ActionType = {
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
  CHANGE_FIELD: `CHANGE_FIELD`,
  SET_PROFILE: `SET_PROFILE`
};

const ActionCreator = {
  changeAuthStatus: (status) => ({
    type: ActionType.CHANGE_AUTH_STATUS,
    payload: status,
  }),
  changeField: (evt) => ({
    type: ActionType.CHANGE_FIELD,
    payload: {
      value: evt.target.value,
      field: evt.target.name
    }}),
  setProfile: (payload) => ({
    type: ActionType.SET_PROFILE,
    payload,
  }),
  checkAuthorization: () => (dispatch) => {
    checkAuth()
      .then(({data}) => {
        dispatch(ActionCreator.changeAuthStatus(`AUTH`));
        dispatch(ActionCreator.setProfile(data));
      });
  },
  authenticate: (evt) => (dispatch, getState) => {
    evt.preventDefault();
    const {user} = getState();

    login(user.email, user.password)
      .then(() => {
        dispatch(ActionCreator.changeAuthStatus(`AUTH`));
      });
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHANGE_FIELD:
      return Object.assign({}, state, {
        [action.payload.field]: action.payload.value,
      });
    case ActionType.SET_PROFILE:
      return Object.assign({}, state, {
        email: action.payload.email,
      });
    default:
      return state;
  }
};

export {ActionCreator, userReducer};
