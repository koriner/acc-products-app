import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { getProducts } from 'store/modules/products/actions';

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
      <h1 data-testid="AppTitle">App Title</h1>
      <div>
        {
          products.map(p => (
            <p>{p.productName}</p>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
}

export default connect(mapStateToProps)(App);
