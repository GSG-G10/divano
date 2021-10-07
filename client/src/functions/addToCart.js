import { message } from "antd";
import axios from "axios";


const addToCart = async (id) => {
  try {
     await axios.post('api/v1/addtocart',{itemId: id})
      return message.success("Add To Cart successfuly")
  }catch(err) {
    return message.error(err || "Internal Server Error")
  }

}

export default addToCart;
