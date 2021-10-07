import Axios from 'axios';

const getProduct = async () => {
  const url = '/api/v1/product/4';
  return Axios.get(url)
    .then((response) => response)
    .catch((err) => {
      throw new Error(`Error in fetching products ${err}`);
    });
};

export default getProduct;
