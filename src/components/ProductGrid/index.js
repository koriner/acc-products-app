import React, { useMemo } from 'react';
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
  const { products, filter } = props;

  // Memoize the function to filter products to avoid
  // re-running when not required
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (filter !== 'all') {
      filtered = products.filter(p => p.type === filter);
    }
    return filtered;
  }, [products, filter]);


  return (
    <Grid container spacing={3} className={styles.productGrid}>
      {filteredProducts.map((product, index) => {
        return (
          <Grid key={`product_${index}`} item xs={6} sm={4} md={3}>
            <ProductCard {...product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  filter: PropTypes.string
};

ProductGrid.defaultProps = {
  filter: 'all'
};

export default ProductGrid;
