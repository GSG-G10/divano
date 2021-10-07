const {
  getCartItems,
  updateQuantity,
  deleteFromCart,
} = require('../../database/queries/cart');

const getCart = async (req, res, next) => {
  try {
    const { id } = req.userObj;
    const items = await getCartItems(id);
    res.json(items);
  } catch (err) {
    next(err);
  }
};

const updateCartProduct = async (req, res, next) => {
  try {
    const { id: userId } = req.userObj;
    const { id: itemId } = req.params;
    const { quentity } = req.body;
    if (quentity >= 0) {
      const { rows: items } = await updateQuantity(quentity, itemId, userId);
      res.status(200).json(items);
    } else {
      res.status(409).send("can't be less than 0");
    }
  } catch (err) {
    next(err);
  }
};

const deleteCartProduct = async (req, res, next) => {
  try {
    const { id: userId } = req.userObj;
    const { id: itemId } = req.params;
    const { rows: items } = await deleteFromCart(userId, itemId);
    res.json(items);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCart, updateCartProduct, deleteCartProduct };
