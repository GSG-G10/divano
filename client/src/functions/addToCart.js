import { message } from "antd";
import {useCart} from "react-use-cart";

const addToCart = async (item) => {
    const {addItem} =useCart();
   addItem(item)
  try {
      const addTocart = await axios('api/v1/addtocart'{
          method:"POST",
          data:
             item.id,
      })message.response()
  }catch(err) {
    message.error(err)
  }

}

export default addToCart
