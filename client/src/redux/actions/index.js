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

export const getProductsByName = (name) => {
  return async (dispatch) => {
    try {
      const productsByName = await axios.get(`http://localhost:5000/products/byName/?name=${name}`);
      return dispatch({
        type: "GET_BYNAME",
        payload: productsByName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

