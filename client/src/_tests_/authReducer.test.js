import * as type from '../redux/actions/actionTypes';
import authReducer from '../redux/reducers/authReducer';
import store from '../redux/store';

const state = store.getState().auth;

describe('Auth Reducer', () => {
  const payload = {
    token: 'token',
    user: {
      email: 'test@mail.com',
      password: 'testPassword',
    },
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(state);
  });

  it('handles SIGNIN_SUCCESS and SIGNUP_SUCCESS', () => {
    expect(
      authReducer(
        state,
        {
          type: type.SIGNIN_SUCCESS && type.SIGNUP_SUCCESS,
          payload,
        },
        localStorage.setItem('token', payload.token)
      )
    ).toEqual({
      token: payload.token,
      isAuthenticated: true,
      loading: false,
      user: payload.user,
    });
  });

  it('handles SIGNIN_FAIL and SIGNUP_FAIL', () => {
    expect(
      authReducer(
        state,
        {
          type:
            type.SIGNUP_FAIL &&
            type.SIGNIN_FAIL &&
            type.AUTH_ERROR &&
            type.ACCOUNT_DELETED &&
            type.LOGOUT,
        },
        localStorage.removeItem('token')
      )
    ).toEqual({
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null,
    });
  });
});
