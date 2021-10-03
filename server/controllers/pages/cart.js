const { getItems } = require('../../database/queries/cart');

const getCart = (req, res) => {
  const { userId } = req.cookies;
  getItems(userId)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: 'Internal server error' });
      });
module.exports=getCart;