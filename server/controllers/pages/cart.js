const { getItems } = require('../../database/queries/cart');

const getCart = async (req, res, next) => {
  try {
    const { id } = req.userObj;
    const items = await getItems(id);
    res.json(items);
  } catch (err) {
    next(err);
  }
};
module.exports = getCart;
