import axios from "axios";
import {
	LOCALHOST_URL, GET_BYNAME,
	ORDER_PRICE_ASC, ORDER_PRICE_DESC,
	FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN,
  ADD_TO_CART, REMOVE_FROM_CART,
  REMOVE_ITEM, LOAD_CURRENT, FILTER_CATEGORIES,
  GET_PRODUCTS, FILTER_PRICE_RANGE, SET_LIMIT
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

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const deleteProd = await axios.delete(`${LOCALHOST_URL}/products/${id}`);
      return dispatch({
        type: "DELETE_PRODUCT",
        payload: deleteProd.data.remove,
      })
    }  
    catch (error) {
      console.log("Error al eliminar productos");
    }
  }
}

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

export const filterByCategory = (category) => {
  
  return {
    type: FILTER_CATEGORIES,
    payload: category
  }
}

// CART
export const addCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId
    }
  }
};
 
export const removeCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  }
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    payload: {
      id: itemId
    }
  }
};

export const setLimit = (number) => {
  return {
    type: SET_LIMIT,
    payload: number
  }
}