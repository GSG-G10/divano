const {
  addToCart,
  getsingleItem,
  updateQuantity,
} = require('../database/queries');

const addtoCart = async (req, res, next) => {
  const { id } = req.userObj;
  const { itemId } = req.body;
  try {
    const getItem = await getsingleItem(id, itemId);
    const { rows } = getItem;
    if (rows.length > 0) {
      await updateQuantity(itemId, id);
      return res.json({ message: 'updated quentity' });
    }
    await addToCart(id, itemId, 1);
    return res.json({ message: 'Added to cart successfully' });
  } catch (err) {
    return next(err);
  }
};

module.exports = addtoCart;
