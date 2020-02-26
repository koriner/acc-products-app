import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import { testStore } from 'test-utils';

/**
 * Generic setup method to render an instance of the component,
 * which can be used by multiple tests. This also implements
 * the example testStore to mimic redux capabilities.
 */
const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const component = shallow(<App store={store} />)
    .childAt(0)
    .dive();
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