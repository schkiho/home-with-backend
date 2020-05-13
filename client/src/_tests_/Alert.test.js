import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore, checkProps } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import Alert from '../components/layout/Alert';

const setUp = (props = {}, initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<Alert {...props} store={store} />)
    .childAt(0)
    .dive();
  return component;
};

describe('Alert Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe('Checking PropTypes', () => {
    it('It should not throw a warning', () => {
      const expectedProps = {
        alerts: [],
      };
      const propsError = checkProps(Alert, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
