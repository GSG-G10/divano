// import './style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../../components/common/NavBar/NavBar'
import CustomizedTables from '../../components/cartTable/cartTable'




function Cart() {
  function totalCost() {
    let totalCost = 0;
    cart.forEach(ele => (totalCost = totalCost + ele.price * ele.quantity));
    return totalCost;
  }

  const [cart, setCart] = useState();
  useEffect(() => {
    axios
      .get('api/v1/userProducts')
      .then(response => response.data)
      .then(data => setCart(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <CustomizedTables />
    </div>
  )

}

export default Cart;
