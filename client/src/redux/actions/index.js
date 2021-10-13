import axios from "axios";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get("http://localhost:5000/products");
      return dispatch({
        type: "GET_PRODUCTS",
        payload: products.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
