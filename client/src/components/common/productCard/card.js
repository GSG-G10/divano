import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from '@mui/system';
import axios from 'axios';

const theme = createTheme({
    palette: {
        primary: {
            //darkBlue
            main: "#04263F",
        },
        secondary: {
            //Brown
            main: "#99580B",
            light: '#0066ff',
        },
    },
});


function ProductsCard({ id, name, price }) {

    
        const addToCart = ({id })=> axios.post('/user', {
           
         })
         .then(function (response) {
           console.log(response);
         })
         .catch(function (error) {
           console.log(error);
         });
         
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://cdn-images.article.com/products/SKU330F/2890x1500/image50523.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                            {name} name
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <Typography variant="body2" color="secondary">
                        {price} price
                    </Typography>
                    <CardActions>
                        <Button size="small"
                            style={{
                                backgroundColor: "#04263F", color: "#ffffff"
                            }} onClick={()=> addToCart(id) } >
                            <ShoppingCartIcon fontSize='small' />
                            Add to cart
                        </Button>
                    </CardActions>
                </Box>
            </Card>
        </ThemeProvider >
    );
}

export default ProductsCard;