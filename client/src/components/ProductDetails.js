import { Card, CardMedia, Typography, CardContent, CardActions, Button, CircularProgress } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from "react";
import getProduct from "../utils/getProducts";
// import axios from 'axios';

function ProductDetails({setNavBackground}) {
  // setNavBackground('primary');
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)

  // const anything = async () => {
  //   try{
  //     const response = await axios('/api/v1/products/3',{
  //       method: 'GET',
  //     })
  //     console.log('res', response)
  //     setProduct(response);
  //     console.log('product', product)
  //   }catch (err){
  //     setError()
  //   }
  // }

  useEffect(() => {
    getProduct()
    .then(res => {
      if(res){
        const {data} = res;
        setProduct(data);
        console.log('res', res)
        console.log('product', product)
      }
    }).catch(err => setError(err))
    .finally(() => setLoading(false));
    
  }, [])

  // if (loading) {
  //   return (
  //       <CircularProgress />
  //   );
  // }

  // if (!(product && product.length)) {
  //   return null;
  // }

  return (
    <>
    <Card sx={{ display:'flex', paddingTop:'3rem', margin:'auto', marginTop:'5rem' }}>
        <CardMedia
        component="img"
        sx={{ width: 900 }}
        image="https://cdn-images.article.com/products/SKU25A/2890x1500/image60499.jpg?fit=max&w=1050&q=80&fm=webp"
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          anything
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{display: "flex", paddingTop: '1rem', paddingBottom: '1rem'}}>
          <DirectionsCarIcon color="primary" sx={{paddingRight: '.5rem'}}/> Delivered to Los Angeles, CA : Oct 18th - 29th
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{display: "flex", paddingTop: '1rem', paddingBottom: '1rem'}}>
          <CheckCircleOutlineIcon color="primary" sx={{paddingRight: '.5rem'}}/> In Stock
        </Typography>
        <CardActions sx={{display: "flex", justifyContent: 'space-between', paddingTop: '1rem', paddingBottom: '1rem'}}>
        <Typography variant="body6" color="secondary" sx={{fontWeight : '700'}}>
          699$
        </Typography>
          <Button variant="contained" color="primary">
            <ShoppingCartIcon /> ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
    </>
    
  );
}

export default ProductDetails;