import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore, checkProps } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import SignUp from '../components/auth/SignUp';

const setUp = (props = {}, initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<SignUp {...props} store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe('SignUp Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'signupComponent');
    expect(wrapper.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('It should not throw a warning', () => {
      const expectedProps = {
        signIn: 'Test Function',
        isAuthenticated: true,
      };
      const propsError = checkProps(SignUp, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
