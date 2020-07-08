import {userReducer, ActionCreator} from './user';

it(`Reducer: changeAuthStatus`, () => {
  expect(userReducer(
      undefined,
      ActionCreator.changeAuthStatus(`AUTH`))
  ).toEqual({
    authorizationStatus: `AUTH`,
    email: ``,
    password: ``
  });
});

it(`Reducer: changeField`, () => {
  expect(userReducer(
      undefined,
      ActionCreator.changeField({target: {value: `123`, name: `password`}}))
  ).toEqual({
    authorizationStatus: `NO_AUTH`,
    email: ``,
    password: `123`
  });
});


it(`Reducer: setProfile`, () => {
  expect(userReducer(
      undefined,
      ActionCreator.setProfile({email: `123@domain.com`}))
  ).toEqual({
    authorizationStatus: `NO_AUTH`,
    email: `123@domain.com`,
    password: ``
  });
});
