const { getProductsQuery } = require('../database/queries/products');

const getProducts = async (req, res, next) => {
  try {
    const { rows: products } = await getProductsQuery();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

module.exports = getProducts;