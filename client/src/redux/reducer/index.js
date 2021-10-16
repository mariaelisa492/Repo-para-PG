import {
	GET_PRODUCTS, GET_BYNAME,
	ORDER_PRICE_ASC, ORDER_PRICE_DESC,
	FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN,
	FILTER_PRICE_RANGE, DELETE_PRODUCT,
	ADD_TO_CART, REMOVE_FROM_CART,
  	ADJUST_QTY, LOAD_CURRENT
} from "../constants/index"

const initialState = {
	users: [],
	sales: [],
	products: [],
	filteredProducts: [],
	cart: [],
	currentItem: null,
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
				filteredProducts: action.payload
			};

		case GET_BYNAME:
			return {
				...state,
				filteredProducts: [...action.payload]
			};

		case DELETE_PRODUCT:
			let deletedProduct = state.products.filter(el => el._id !== action.payload._id)
			return {
				...state,
				products: [...deletedProduct]
			};
		// Filter & Sort
		case ORDER_PRICE_ASC:
			let sortedPriceAsc = state.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1)
			return {
				...state,
				filteredProducts: [...sortedPriceAsc]
			};

		case ORDER_PRICE_DESC:
			let sortedPriceDesc = state.filteredProducts.sort((a, b) => (a.price > b.price) ? -1 : 1)
			return {
				...state,
				filteredProducts: [...sortedPriceDesc]
			};

		case FILTER_PRICE_ONLY_LESSTHAN:
			let filt1 = state.filteredProducts.filter((e) => e.price < action.payload)
			return {
				...state,
				filteredProducts: [...filt1]
			};

		case FILTER_PRICE_ONLY_MORETHAN:
			let filt2 = state.filteredProducts.filter((e) => e.price > action.payload)
			return {
				...state,
				filteredProducts: [...filt2]
			};

		case FILTER_PRICE_RANGE:
			let filt3 = state.filteredProducts.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			return {
				...state,
				filteredProducts: [...filt3]
			};
		// Cart:
		case ADD_TO_CART: 
		// modificar name por id
		const item = state.products.find(item => item.name === action.payload.id)
		const inCart = state.cart.find(item => item.name === action.payload.id ? true : false)
		return {
			...state,
			cart: inCart ? 
			state.cart.map( item => item.name === action.payload.id ? 
				{...item, qty: item.qty + 1} 
				: item 
			) 
			: [...state.cart, {...item, qty: 1}]
		};
		case REMOVE_FROM_CART: 
		return {
			...state,
			cart: inCart ? 
			state.cart.map( item => item.name === action.payload.id ? 
				{...item, qty: item.qty + 1} 
				: item 
			) 
			: [...state.cart, {...item, qty: 1}]
		};
		case ADJUST_QTY: 
		return {
			...state,
			cart: state.cart.map(item.name === action.payload.id ? {...item, qty: action.payload.qty} : item)
		}; 
		case LOAD_CURRENT:
		return {
			...state,
			currentItem: action.payload
		};
	
		default:
			return state;
	}
};