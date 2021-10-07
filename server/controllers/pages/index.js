const { getItems, updateQuantity } = require('../../database/queries/cart');

const getCart = async (req, res, next) => {
  try {
    const { id } = req.userObj;
    const items = await getItems(id);
    res.json(items);
  } catch (err) {
    next(err);
  }
};

const updateCartProduct = async (req, res, next) => {
  try {
    const { id: userId, qty } = req.userObj;
    const { itemId } = req.params;
    const items = await updateQuantity(qty, itemId, userId);
    res.json(items);
  } catch (err) {
    next(err);
  }
};

const deleteCartProduct = async (req, res, next) => {
  try {
    const { id, qty } = req.userObj;
    const items = await updateQuantity(qty, id);
    res.json(items);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCart, updateCartProduct, deleteCartProduct };
