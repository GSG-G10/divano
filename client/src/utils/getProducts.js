import axios from 'axios';

const getProduct = async () => {
  const url = '/api/v1/products/4';
  return axios.get(url)
  .then((res) => res)
  .catch((err) => {
    throw new Error(`Error in fetching products ${err}`);
  });
}

export default getProduct;