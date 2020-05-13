import * as type from '../redux/actions/actionTypes';
import profileReducer from '../redux/reducers/profileReducer';
import store from '../redux/store';

let state = store.getState().profile;
console.log(state);

describe('Profile Reducer', () => {
  const payload = {
    profile: 'profile',
    error: {
      error: 'error',
    },
  };

  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(state);
  });

  it('handles GET_PROFILE', () => {
    expect(
      profileReducer(state, {
        type: type.GET_PROFILE,
        payload,
      })
    ).toEqual({
      profile: payload,
      loading: false,
      error: {},
    });
  });

  it('handles PROFILE_ERROR', () => {
    expect(
      profileReducer(state, {
        type: type.PROFILE_ERROR,
        payload,
      })
    ).toEqual({
      profile: null,
      loading: false,
      error: payload,
    });
  });

  it('handles CLEAR_PROFILE', () => {
    expect(
      profileReducer(state, {
        type: type.CLEAR_PROFILE,
        payload,
      })
    ).toEqual({
      profile: null,
      loading: false,
      error: {},
    });
  });
});
