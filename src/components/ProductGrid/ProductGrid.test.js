import React from 'react';
import { shallow } from 'enzyme';
import ProductGrid from './index';

/**
 * Generic setup method to render an instance of the component,
 * which can be used by multiple tests. This also implements
 * the example testStore to mimic redux capabilities.
 */
const setup = (props = {}) => {
  const component = shallow(<ProductGrid {...props} />);
  return component;
}

// App component tests
describe('ProductGrid component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
        products: [
          { id: 1 },
          { id: 2 },
        ]
    });
  });

  describe('rendering', () => {

    it ('should render the ProductGrid component', () => {
      const comp = wrapper.find(`[data-testid='ProductGrid']`);
      expect(comp.length).toBe(1);
    });

    it ('should render the correct amount of grid items', () => {
      const comp = wrapper.find(`[data-testid='ProductGrid.ProductCard']`);
      expect(comp.length).toBe(2);
    });
  });

});