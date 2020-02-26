import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import styles from './styles.module.scss';
import images from 'constants/images';

/**
 * Simple method to just get static images from the constants definition
 * for this demo.
 * 
 * @param {String} imageName
 */
const getImage = imageName => {
  return images[imageName];
}

/**
 * ProductCard component
 */
const ProductCard = (props) => {
  const {
    productName,
    productImage,
    price,
    isSale,
  } = props;

  return (
    <Card className={styles.productCard} data-testid="ProductCard">
      <CardActionArea>
        <CardMedia
          data-testid="ProductCard.Image"
          component="img"
          className={styles.media}
          image={getImage(productImage)}
          title={productName}
        />
        <CardContent>
          <div className={styles.productName} data-testid="ProductCard.Name">
            <Typography gutterBottom>
              {productName} &mdash; <strong>{price}</strong>
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      {
        isSale && (
          <Badge
            data-testid="ProductCard.Badge"
            style={{
              position: 'absolute',
              left: 30,
              top: 19,
            }}
            color="secondary" badgeContent={<strong>SALE</strong>} />
        )
      }
    </Card>
  )
}

ProductCard.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  isSale: PropTypes.bool
};

export default ProductCard;

