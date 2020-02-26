import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import styles from './styles.module.scss';
import ProductCard from 'components/ProductCard';

/**
 * ProductGrid component to render a MUI grid for all products
 *
 * @param {Object} props
 */
const ProductGrid = props => {
  const { products } = props;

  return (
    <Grid container maxWidth="sm" spacing={3} className={styles.productGrid}>
      {products.map((product, index) => {
        return (
          <Grid item xs={6} sm={4} md={3}>
            <ProductCard {...product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductGrid;
