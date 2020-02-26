import React, { useEffect } from 'react';
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
  const { products } = props;

  // On first render, dispatch an action to load products
  useEffect(() => {
    props.dispatch(getProducts());
  }, []);

  return (
    <div className={styles.app} data-testid="App">
      <NavBar />
      <Container maxWidth="lg">
        <ProductGrid
          products={products}
        />
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
}

export default connect(mapStateToProps)(App);
