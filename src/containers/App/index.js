import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { getProducts } from 'store/modules/products/actions';
import Container from '@material-ui/core/Container';
import NavBar from 'components/NavBar';
import ProductGrid from 'components/ProductGrid';

/**
 * The main app component container is responsible for
 * loading the required product data and connecting to redux
 */
function App(props) {
  const { products, productTypes } = props;

  // Local state to track filter option from nav
  const [filter, setFilter] = useState('all');

  // On first render, dispatch an action to load products
  useEffect(() => {
    props.dispatch(getProducts());
  }, []);

  return (
    <div className={styles.app} data-testid="App">
      <NavBar
        productTypes={productTypes}
        onChangeFilter={setFilter}
        filter={filter}
      />
      <Container maxWidth="lg">
        <ProductGrid
          products={products}
          filter={filter}
        />
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    productTypes: state.products.productTypes,
  };
}

export default connect(mapStateToProps)(App);
