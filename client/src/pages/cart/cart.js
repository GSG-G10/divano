// import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/common/NavBar/NavBar';
import CustomizedTables from '../../components/cartTable/cartTable';

function Cart() {
  const [cart, setCart] = useState();
  const [navBackground, setNavBackground] = useState();
  const [username, setUsername] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [active, setActive] = useState('');

  // function totalCost() {
  //   let totalCost = 0;
  //   cart.forEach((ele) => (totalCost = totalCost + ele.price * ele.quantity));
  //   return totalCost;
  // }
  const deleteProduct = (id) => {
    axios
      .delete(`/api/v1/userProducts/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  const getCartProducts = () =>
    axios
      .get('/api/v1/cart')
      .then((res) => res.data)
      .then((data) => setCart(data))
      .catch((err) => console.log(err));

  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <div>
      <NavBar
        username={username}
        cartCount={cartCount}
        navBackground={navBackground}
        setActive={setActive}
        active={active}
      />
      <CustomizedTables deleteProduct={deleteProduct} />
    </div>
  );
}

export default Cart;
