import axios from "axios";
import {
  LOCALHOST_URL, GET_BYNAME,
  ORDER_PRICE_ASC, ORDER_PRICE_DESC,
  FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN,
  ADD_TO_CART, REMOVE_FROM_CART,
  REMOVE_ITEM, GET_ORDERS, FILTER_CATEGORIES,
  GET_PRODUCTS, FILTER_PRICE_RANGE, SET_LIMIT,
  GET_MY_ORDERS, EMPTY_CART, GET_PRODUCT_DETAIL,
  ADD_PRODUCT_FAV, REMOVE_PRODUCT_FAV
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
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const getSingle = await axios.get(`${LOCALHOST_URL}/products/${id}`);
      return dispatch({
        type: "GET_SINGLE_PRODUCT",
        payload: getSingle.data
      })
    }
    catch (error) {
      console.log("Error al obtener un unico producto")
    }
  }
}

export const getProductDetail = (id) => {
  return async (dispatch) => {
      try {
          const product = await axios.get(`${LOCALHOST_URL}/products/${id}`);
          return dispatch({
              type: GET_PRODUCT_DETAIL,
              payload: product.data
          })
      } catch (error) {
          console.log(error)
      }
  }
}

export const updateProduct = (product) => {
  return async (dispatch) => {
      try {
          const objProduct = 
          { 
            name:product.name, 
            description: product.description, 
            image: product.image, 
            price: product.price, 
            stock: product.stock, 
            model: product.model,
            category: product.category,
            brand: product.brand,
            isActive: true };
          const products = await axios.put(`${LOCALHOST_URL}/products/${product._id}`, objProduct);
          return dispatch({
              type: "UPDATE_PRODUCT",
              payload: products.data
          })
      } catch (error) {
        console.log("Error al actualizar producto")   
      }
  }
}


// --------------------------- ORDER ACTIONS
export const setNewOrder = (order) => {
  return  (dispatch) => {
    try{
      axios.post(`${LOCALHOST_URL}/orders/create`, order).then(setTimeout(()=>{dispatch(emptyCart())},2000))
    }
    catch (error) {
      console.log(error);
    }
  }
}

export const getAllOrders = () => {
    return async (dispatch) => {
      try {
        const orders = await axios.get(`${LOCALHOST_URL}/orders`);
        return dispatch({
          type: GET_ORDERS,
          payload: orders.data,
        });
      } catch (error) {
        console.log(error, 'getOrders ||Error||');
      }
    } 
}

export const getMyOrders = (user) => {
  return async (dispatch) => {
    try {
      const myOrders = await axios.get(`${LOCALHOST_URL}/orders/userOrders/?user=${user}`);
      return dispatch({
        type: GET_MY_ORDERS,
        payload: myOrders.data,
      });
    } catch (error) {
      console.log(error, 'getMyOrders ||Error||');
    }
  };
};

// ------------------------ FILTROS Y ORDENAMIENTOS 
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

// ----------------------------- CART
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

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  }
}

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






//add favorite

export function addProductFav (payload){
  return {
      type: ADD_PRODUCT_FAV,
      payload
  };
};

export function removeProductFav (id){
  return{
      type: REMOVE_PRODUCT_FAV,
      payload: id
  };
};