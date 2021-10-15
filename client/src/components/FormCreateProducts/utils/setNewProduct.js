import axios from "axios";
import { LOCALHOST_URL } from "../../../redux/constants/index"

export const setNewProduct = (objProduct) => {
    return async () => {
      try{
        await axios.post(`${LOCALHOST_URL}/products/create`, objProduct);
      }
  
      catch (error) {
        console.log(error);
      }
    }
  }