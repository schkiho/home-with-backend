import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore, checkProps } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from '../components/dashboard/Dashboard';

const setUp = (props = {}, initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Dashboard {...props} store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe('Dashboard Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'dashboardComponent');
    expect(wrapper.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('It should not throw a warning', () => {
      const expectedProps = {
        getCurrentProfile: () => {},
        deleteAccount: () => {},
        profile: {
          profile: {},
          loading: false,
        },
      };
      const propsError = checkProps(Dashboard, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
