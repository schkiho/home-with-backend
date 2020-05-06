import { SIGNUP_SUCCESS, SIGNUP_FAIL } from '../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
};

export default function (state = initialState, action) {
  return state;
}
