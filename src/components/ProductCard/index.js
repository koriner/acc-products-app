import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    type,
    isSale,
  } = props;

  return (
    <Card className={styles.productCard}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={styles.media}
          image={getImage(productImage)}
          title={productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {productName} &mdash; <strong>{price}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
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

