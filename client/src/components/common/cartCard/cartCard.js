import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { Box } from '@mui/system';
// import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      //darkBlue
      main: '#04263F',
    },
    secondary: {
      //Brown
      main: '#99580B',
      light: '#0066ff',
    },
  },
});
function CartCard({ id, name, price, img }) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 150 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="50"
            width="50"
            image={img}
            alt="green iguana"
          />
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            style={{ fontSize: 14 }}
          >
            {name}
          </Typography>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}
export default CartCard;
