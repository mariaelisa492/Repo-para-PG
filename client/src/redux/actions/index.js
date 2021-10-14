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
      console.log(error, 'getProducts ||Error||');
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
      console.log(error, 'getProductsByName ||Error||');
    }
  };
};

export const getProductsByPriceAsc = () => {
  return async (dispatch) => {
    try {
      const productsByPriceAsc = await axios.get(`http://localhost:5000/products/orderedByPriceAsc`);
      return dispatch({
        type: "ORDER_PRICE_ASC",
        payload: productsByPriceAsc.data
      });
    } catch (error) {
      console.log(error , 'getProductsByPriceAsc ||Error||');
    }
  };
};

export const getProductsByPriceDesc = () => {
  return async (dispatch) => {
    try {
      const productsByPriceDesc = await axios.get(`http://localhost:5000/products/orderedByPriceDesc`);
      return dispatch({
        type: "ORDER_PRICE_DESC",
        payload: productsByPriceDesc.data
      });
    } catch (error) {
      console.log(error, 'getProductsByPriceDesc ||Error||');
    }
  };
};

