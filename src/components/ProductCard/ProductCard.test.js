import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from './index';

/**
 * Generic setup method to render an instance of the component,
 * which can be used by multiple tests. This also implements
 * the example testStore to mimic redux capabilities.
 */
const setup = (props = {}) => {
  const component = shallow(<ProductCard {...props} />);
  return component;
}

// App component tests
describe('ProductCard component', () => {
  let wrapper;

  describe('rendering', () => {

    it ('should render the ProductCard component and inner elements', () => {
      wrapper = setup({
        productName: 'Product 1',
        productImage: 'Product_1.jpeg',
        price: '$10',
        isSale: false
      });

      const comp = wrapper.find(`[data-testid='ProductCard']`);
      const name = wrapper.find(`[data-testid='ProductCard.Name']`);
      const badge = wrapper.find(`[data-testid='ProductCard.Badge']`);

      expect(comp.length).toBe(1);
      expect(name.length).toBe(1);
      expect(badge.length).toBe(0);
    });

    it ('should render the badge when the product isSale = true', () => {
      wrapper = setup({
        productName: 'Product 1',
        productImage: 'Product_1.jpeg',
        price: '$10',
        isSale: true
      });

      const comp = wrapper.find(`[data-testid='ProductCard']`);
      const name = wrapper.find(`[data-testid='ProductCard.Name']`);
      const badge = wrapper.find(`[data-testid='ProductCard.Badge']`);

      expect(comp.length).toBe(1);
      expect(name.length).toBe(1);
      expect(badge.length).toBe(1);
    });
  });

});