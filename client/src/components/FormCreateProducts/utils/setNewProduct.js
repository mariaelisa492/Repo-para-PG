import axios from "axios";

export const setNewProduct = (objProduct) => {
    return async () => {
      try{
        await axios.post('http://localhost:5000/products/create', objProduct);
      }
  
      catch (error) {
        console.log(error);
      }
    }
  }