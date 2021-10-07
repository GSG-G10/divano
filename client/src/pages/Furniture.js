import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsCard from '../components/common/productCard/card.js'
import { Box, Grid } from '@mui/material';
import { Row, Col } from "antd";

function Furniture ({setNavBackground}) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = () => {
    const url = '/api/v1/products';
    return axios.get(url)
      .then((response) => response)
      .catch((err) => {
        throw new Error(`Error in fetching products ${err}`);
      });
  };
  
  useEffect(() => {
    setNavBackground('primary');
    const controller = new AbortController();
    console.log('hi')
    getProduct()
      .then((res) => {
        if (res) {
          const { data } = res;
          setProducts(data.products);
          console.log('data', data);
        }
      }).catch((err) => setError(err))
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Grid container spacing={2} justifyContent="space-around" sx={{marginTop: '8rem', paddingLeft: '5rem'}}>
      {products.map((pro, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ProductsCard id={pro.id} name={pro.name} price={pro.price} image={pro.image}/>
        </Grid>
      ))}
      </Grid>
    </>

  );

}

export default Furniture;