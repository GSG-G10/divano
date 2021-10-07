import {
  Card, CardMedia, Typography, CardContent, CardActions, Button, CircularProgress,
} from '@mui/material';
import { useState, useEffect } from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import getProduct from '../utils/getProducts';

function ProductDetails({ setNavBackground }) {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNavBackground('primary');
    const controller = new AbortController();

    getProduct()
      .then((res) => {
        if (res) {
          const { data } = res;
          setProduct(data);
        }
      }).catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <CircularProgress />
    );
  }

  if (!(product && product.length)) {
    return null;
  }

  return (
    <>
      {product.map((pro) => (
        <Card sx={{
          display: 'flex', paddingTop: '3rem', margin: 'auto', marginTop: '7rem',
        }}
        >
          <CardMedia
            component="img"
            sx={{ width: 900 }}
            image={pro.image}
            alt="product"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="primary">
              {pro.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <DirectionsCarIcon color="primary" sx={{ paddingRight: '.5rem' }} />
              {' '}
              Delivered to Los Angeles, CA : Oct 18th - 29th
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <CheckCircleOutlineIcon color="primary" sx={{ paddingRight: '.5rem' }} />
              {' '}
              In Stock
            </Typography>
            <CardActions sx={{
              display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', paddingBottom: '1rem',
            }}
            >
              <Typography variant="body6" color="secondary" sx={{ fontWeight: '700' }}>
                {pro.price}
                $
              </Typography>
              <Button variant="contained" color="primary">
                <ShoppingCartIcon />
                {' '}
                ADD TO CART
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}

    </>

  );
}

export default ProductDetails;
