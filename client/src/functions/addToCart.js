import { message } from "antd";
// import {useCart} from "react-use-cart";
import axios from "axios";


const addToCart = async (item) => {
  try {
     await axios('api/v1/addtocart',{
          method:"POST",
          data:
             item.id,
      })
      return message.success("Add To Cart successfuly")
  }catch(err) {
    return message.error(err)
  }

}

export default addToCart;
