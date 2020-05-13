import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore, checkProps } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/layout/Navbar';

const setUp = (props = {}, initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Navbar {...props} store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe('Navbar Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'navbarComponent');
    expect(wrapper.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('It should not throw a warning', () => {
      const expectedProps = {
        logout: () => {},
        auth: {
          isAuthenticated: true,
          loading: false,
        },
      };
      const propsError = checkProps(Navbar, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
