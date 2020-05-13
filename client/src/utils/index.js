import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducer';
import checkPropTypes from 'check-prop-types';
import { assertPropTypes } from 'check-prop-types';

export const findByTestAtrr = (component, atrr) => {
  const wrapper = component.find(`[data-test='${atrr}']`);
  return wrapper;
};

export const testStore = (initialState) => {
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  return store;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsError;
};

export const checkRequiredProps = (component, expectedProps) => {
  const propsError = checkPropTypes.assertPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsError;
};
