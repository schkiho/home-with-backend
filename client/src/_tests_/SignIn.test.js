import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore, checkProps } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import SignIn from '../components/auth/SignIn';

const setUp = (props = {}, initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<SignIn {...props} store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe('SignIn Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'signinComponent');
    expect(wrapper.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('It should not throw a warning', () => {
      const expectedProps = {
        signIn: () => {},
        isAuthenticated: true,
      };
      const propsError = checkProps(SignIn, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
