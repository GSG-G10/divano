import { Card, CardMedia, Typography, CardContent, CardActions, Button } from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetails({setNavBackground}) {
  setNavBackground('primary')
  return (
    <Card sx={{ display:'flex', paddingTop:'3rem', margin:'auto', marginTop:'5rem' }}>
      <CardMedia
        component="img"
        sx={{ width: 900 }}
        image="https://cdn-images.article.com/products/SKU11884/2890x1500/image46333.jpg?fit=max&w=1050&q=80&fm=webp"
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
          Abisko Quartz White Sofa
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
  );
}

export default ProductDetails;