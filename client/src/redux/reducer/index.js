import {
	GET_PRODUCTS, GET_BYNAME,
	ORDER_PRICE_ASC, ORDER_PRICE_DESC,
	FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN,
	FILTER_PRICE_RANGE
  } from "../constants/index"

const initialState = {
	users: [],
    sales:[],
    products:[],
	filteredProducts:[]
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_PRODUCTS:
			return { ...state,
				products: action.payload,
				filteredProducts: action.payload
			};

		case GET_BYNAME:
			return { ...state,
				filteredProducts: [...action.payload]
			};

		case ORDER_PRICE_ASC:
			let sortedPriceAsc = state.filteredProducts.sort((a,b) => (a.price > b.price)? 1: -1)
			return { ...state,
				filteredProducts: [...sortedPriceAsc]
			};

		case ORDER_PRICE_DESC:
			let sortedPriceDesc = state.filteredProducts.sort((a,b) => (a.price > b.price)? -1: 1)
			return { ...state,
				filteredProducts: [...sortedPriceDesc]	
			};

		case FILTER_PRICE_ONLY_LESSTHAN:
			let	filt1 = state.filteredProducts.filter((e) => e.price < action.payload)
			return { ...state,
				filteredProducts: [...filt1]
			};

		case FILTER_PRICE_ONLY_MORETHAN:
			let filt2 = state.filteredProducts.filter((e) => e.price > action.payload)
		return { ...state,
			filteredProducts: [...filt2]
		};

		case FILTER_PRICE_RANGE:
			let filt3 = state.filteredProducts.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
		return { ...state,
			filteredProducts: [...filt3]
		};

		default:
			return state;
	}
};