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

export const setNewProduct = (objProduct) => {
  return async (dispatch) => {
    try{
      const resProduct = await axios.post('http://localhost:5000/products/create', objProduct);

      return dispatch({
        type: 'CREATE_PRODUCT',
        payload: resProduct
      })
    }

    catch (error) {
      console.log(error);
    }
  }
}

                      // FILTROS Y ORDENAMIENTOS //

export const getProductsByPriceAsc = () => {
  return{
    type: 'ORDER_PRICE_ASC'
  }
};

export const getProductsByPriceDesc = () => {
  return{
    type: 'ORDER_PRICE_DESC'
  }
};

export const filterProductsByPriceLessThan = (price) => {
  return{
    type: "FILTER_PRICE_ONLY_LESSTHAN",
    payload: price
  }
}

export const filterProductsByPriceMoreThan = (price) => {
  return{
    type: "FILTER_PRICE_ONLY_MORETHAN",
    payload: price
  }
}

export const filterProductsByPriceRange = (price1,price2) => {
  return{
    type: "FILTER_PRICE_RANGE",
    payload: {price1,price2}
  }
}
