// import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/common/NavBar/NavBar';
import CustomizedTables from '../../components/cartTable/cartTable';

function Cart() {
  const [cartProducts, setCartProducts] = useState();
  const [navBackground, setNavBackground] = useState();
  const [username, setUsername] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [active, setActive] = useState('');

  const deleteProduct = (id) => {
    axios
      .delete(`/api/v1/cart/products/${id}`)
      .then(() => {
        setCartProducts((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((err) => console.error(err));
  };

  const updateProduct = (id, qty) => {
    axios
      .put(`/api/v1/cart/products/${id}`, {
        quentity: qty,
      })
      .then((res) => {
        setCartProducts((prev) =>
          prev.map((p) => {
            if (p.id === id) {
              return { ...p, quentity: qty };
            }
            return p;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const getCartProducts = () =>
    axios
      .get('/api/v1/cart')
      .then((res) => res.data)
      .then((data) => setCartProducts(data))
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
      <CustomizedTables
        cartProducts={cartProducts}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />
    </div>
  );
}

export default Cart;
