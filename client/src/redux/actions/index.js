import axios from "axios";
import {
  LOCALHOST_URL, GET_BYNAME,
  ORDER_PRICE_ASC, ORDER_PRICE_DESC,
  FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN, NO_FILTER,
  ADD_TO_CART, REMOVE_FROM_CART,
  REMOVE_ITEM, GET_ORDERS, FILTER_CATEGORIES,
  GET_PRODUCTS, FILTER_PRICE_RANGE, SET_LIMIT,
  GET_MY_ORDERS, EMPTY_CART, GET_PRODUCT_DETAIL,
  GET_WISHLIST, GET_USER, ADD_PRODUCT_FAV, REMOVE_PRODUCT_FAV, 
  SET_USER, EDIT_USER, GET_QUESTIONS_BY_PRODUCT, GET_ALL_UNANSWERED_QUESTIONS,
  GET_ABOUT, UPDATE_ABOUT, CLEAR_QUESTIONS, RESET_PRICE_ORDER,
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
      }
      )
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
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        stock: product.stock,
        model: product.model,
        category: product.category,
        brand: product.brand,
        isActive: true
      };
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
export const removeStock = (order) => {
  return async (dispatch) => {
    try {
      order.items.map(
        async (item) => {
          const product = await axios.put(`${LOCALHOST_URL}/products/stock/${item._id}`, { qty: item.qty })
        }
      )
    }
    catch (error) {
      console.log("Error al actualizar stock")
    }
  }
}

export const setNewOrder = (order) => {
  return (dispatch) => {
    try {
      axios.post(`${LOCALHOST_URL}/orders/create`, order).then(setTimeout(() => { dispatch(emptyCart()) }, 2000))
      .then(setTimeout(() => { dispatch(removeStock(order)) }, 800))
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

export const updateOrders = (order, status) => {
  return async (dispatch) => {
    try {
      const objOrder =
      {
        status: status,
      };
      const orders = await axios.put(`${LOCALHOST_URL}/orders/${order._id}`, objOrder);
      /* console.log(orders, "ESTO ES ORDERSSSSS") */
      console.log(status, "ESTO ES SOLO STATUS")
      return dispatch({
        type: "UPDATE_ORDER",
        payload: orders.data.order
      })
    } catch (error) {
      console.log("Error al actualizar la orden")
    }
  }
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const deleteOrd = await axios.delete(`${LOCALHOST_URL}/orders/${id}`);
      return dispatch({
        type: "DELETE_ORDER",
        payload: deleteOrd.data.remove
      })
    }
    catch (error) {
      console.log("Error al eliminar la orden");
    }
  }
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

export const resetProductsByPrice = () => {
  return {
    type: RESET_PRICE_ORDER
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

export const reset_filter = () => {
  return {
    type: NO_FILTER,
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

// ----------------------------- USERS

export const searchUserInDb = (email) => {
  return async (dispatch) => {
    try {
      const userFound = await axios.get(`${LOCALHOST_URL}/users/user/${email}`);
      return dispatch({
        type: SET_USER,
        payload: userFound.data,
      })
    } catch (error) {
      console.log(error, 'searchUserInDb ||Error||');
    }
  };
}

export const editUser = (user) => {
  return async (dispatch) => {
    try {
      console.log(user, 'user en editUser');
      const userEdited = await axios.put(`${LOCALHOST_URL}/users/${user._id}`, user);
      console.log(userEdited, 'userEdited en editUser');
      return dispatch({
        type: EDIT_USER,
        payload: userEdited.data,
      })
    }
    catch (error) {
      console.log(error, 'editUser ||Error||');
    }
  }
}

export const makeAdmin = (id) => {
  return async (dispatch) => {
    try {
      const userEdited = await axios.put(`${LOCALHOST_URL}/users/makeAdmin/${id}`);
      return dispatch({
        type: EDIT_USER,
        payload: userEdited.data,
      })
    }
    catch (error) {
      console.log(error, 'makeAdmin ||Error||');
    }
  }
}

export const deleteUser = (id) => {
  return async () => {
    try {
      const userDeleted = await axios.delete(`${LOCALHOST_URL}/users/${id}`);
      return userDeleted
    }
    catch (error) {
      console.log(error, 'deleteUser ||Error||');
    }
  }
}

//  ----------------------------- PAGINATION

export const setLimit = (number) => {
  return {
    type: SET_LIMIT,
    payload: number
  }
}

//add favorite

export const toggleWishList = (wish) => {
  return async function(dispatch){
      try {
        const response = await axios.post(`${LOCALHOST_URL}/users/toggleWish`, wish) 
        dispatch({
          type: GET_WISHLIST,
          payload: response.data
        })
      } catch (error) {
          console.log('Error al toggle')
      }
  }
}

export const getWishlist = (email) =>{
  console.log('ACTIONS EMAAAAAAAAAAIL', email)
  return  async function(dispatch){
      const wishes = await axios.get(`${LOCALHOST_URL}/users/wishlist/all?email=${email}`)
      dispatch({
          type: GET_WISHLIST,
          payload: wishes.data
      })
  }
} 

// ----------------------------- QUESTIONS

export const addQuestion = ({question}) => {
  //console.log(question.productq, 'productq en addQuestion');
  //console.log(question, 'question en addQuestion');
  return async (dispatch) => {
    dispatch({ type: 'SEND_DATA' });
    try {
      await axios.post(`${LOCALHOST_URL}/products/questions/p/${question.productq}`, question);
    } catch (err) {
      console.log('ERROR EN ADD QUESTIONS: ' + err);
    } finally {
      dispatch({ type: 'UPDATE_DATA' });
    }
  }
}

export const getAllUnansweredQuestions = () => {
  return async (dispatch) => {
    try {
      const questions = await axios.get(`${LOCALHOST_URL}/products/questions/allUnanswered`);
      return dispatch({
        type: GET_ALL_UNANSWERED_QUESTIONS,
        payload: questions.data,
      })
    } catch (error) {
      console.log(error, 'getAllUnansweredQuestions ||Error||');
    }
  };
}


// ----------------------------- ABOUT

export const getAbout = () => {
  return async (dispatch) => {
    try {
      const about = await axios.get(`${LOCALHOST_URL}/about`);
      return dispatch({
        type: GET_ABOUT,
        payload: about.data,
      })
    } catch (error) {
      console.log(error, 'getAbout ||Error||');
    }
  };
}

export const updateAbout = (aboutObjet) => {
  return async (dispatch) => {
    try {
      const aboutAux = {
        address: aboutObjet.address,
        telephone: aboutObjet.telephone,
        email: aboutObjet.email,
        city: aboutObjet.city,
        stateOrProvince: aboutObjet.stateOrProvince,
        logo: aboutObjet.logo,
        logoSmall: aboutObjet.logoSmall,
      }
      console.log(aboutAux, 'aboutAux en updateAbout');
      const about = await axios.put(`${LOCALHOST_URL}/about/update/${aboutObjet._id}`, aboutAux);
      return dispatch({
        type: UPDATE_ABOUT,
        payload: about.data,
      })
    } catch (error) {
      console.log(error, 'updateAbout ||Error||');
    }
  }
}
