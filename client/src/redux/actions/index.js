import axios from "axios";
import {
  LOCALHOST_URL, GET_PRODUCTS, 
  GET_BYNAME, ORDER_PRICE_ASC, 
  ORDER_PRICE_DESC, FILTER_PRICE_ONLY_LESSTHAN, 
  FILTER_PRICE_ONLY_MORETHAN, FILTER_PRICE_RANGE
} from "../constants/index"

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${LOCALHOST_URL}/products`);
      return dispatch({
        type: GET_PRODUCTS,
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
      const productsByName = await axios.get(`${LOCALHOST_URL}/products/byName/?name=${name}`);
      return dispatch({
        type: GET_BYNAME,
        payload: productsByName.data,
      });
    } catch (error) {
      console.log(error, 'getProductsByName ||Error||');
    }
  };
};

   // FILTROS Y ORDENAMIENTOS //
export const getProductsByPriceAsc = () => {
  return {
    type: ORDER_PRICE_ASC
  }
};

export const getProductsByPriceDesc = () => {
  return {
    type: ORDER_PRICE_DESC
  }
};

export const filterProductsByPriceLessThan = (price) => {
  return {
    type: FILTER_PRICE_ONLY_LESSTHAN,
    payload: price
  }
}

export const filterProductsByPriceMoreThan = (price) => {
  return {
    type: FILTER_PRICE_ONLY_MORETHAN,
    payload: price
  }
}

export const filterProductsByPriceRange = (price1, price2) => {
  return {
    type: FILTER_PRICE_RANGE,
    payload: { price1, price2 }
  }
}
