import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

/**
 * Generic setup method to render an instance of the component,
 * which can be used by multiple tests.
 */
const setup = () => {
  const component = shallow(<App />);
  return component;
}

// App component tests
describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  describe('rendering', () => {

    it ('should render the App component', () => {
      const comp = wrapper.find(`[data-testid='App']`);
      expect(comp.length).toBe(1);
    });

  });

});