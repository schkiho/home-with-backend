import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils';
import '@testing-library/jest-dom/extend-expect';
import Landing from '../components/layout/Landing';

const setUp = (props = {}) => {
  const component = shallow(<Landing {...props} />);
  return component;
};

describe('Landing Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'landingComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAtrr(component, 'logo');
    expect(logo.length).toBe(1);
  });
});
