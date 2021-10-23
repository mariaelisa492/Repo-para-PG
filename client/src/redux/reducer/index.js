import {
	GET_PRODUCTS, GET_BYNAME,
	ORDER_PRICE_ASC, ORDER_PRICE_DESC,
	FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN,
	FILTER_PRICE_RANGE, DELETE_PRODUCT,
	ADD_TO_CART, REMOVE_FROM_CART,
	REMOVE_ITEM, EMPTY_CART, FILTER_CATEGORIES, SET_LIMIT,
	GET_MY_ORDERS, GET_SINGLE_PRODUCT, UPDATE_PRODUCT, GET_PRODUCT_DETAIL, GET_USER
 
} from "../constants/index"




const initialState = {
	users: [],
	sales: [],
	product: {},
	products: [],
	filteredProducts: [],
	cart: [],
	limit: 0,
	currentItem: null,
	filteredTF: false,
	user: {},
	orders: []
	productDetail: {},
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload
			};

		case GET_BYNAME:
			return {
				...state,
				filteredProducts: [...action.payload],
				filteredTF: true
			};

		case DELETE_PRODUCT:
			let deletedProduct = state.products.filter(el => el._id !== action.payload._id)
			return {
				...state,
				products: [...deletedProduct]
			};

		case GET_MY_ORDERS:
			return {
				...state,
				orders: [...action.payload]
			}

		case GET_SINGLE_PRODUCT:
			return {
				...state,
				product: action.payload
			}

		// ---- ORDENAMIENTOS ---- //	
		case GET_SINGLE_PRODUCT:
			return {
				...state,
				product: action.payload
			}

		case UPDATE_PRODUCT:
			let index = state.products.findIndex(product => product._id === action.payload._id);
			state.products[index] = action.payload;
			return {
				...state,
				products: [...state.products]
			};

		case ORDER_PRICE_ASC:
			var sortedPriceAsc
			if (state.filteredTF) {
				sortedPriceAsc = state.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1)
			}
			else {
				sortedPriceAsc = state.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
			}
			// console.log(sortedPriceAsc)
			return {
				...state,
				filteredProducts: [...sortedPriceAsc],
				filteredTF: true
			};

		case ORDER_PRICE_DESC:
			var sortedPriceDesc
			if (state.filteredTF) {
				sortedPriceDesc = state.filteredProducts.sort((a, b) => (a.price > b.price) ? -1 : 1)
			}
			else {
				sortedPriceDesc = state.products.sort((a, b) => (a.price > b.price) ? -1 : 1)
			}
			// console.log(sortedPriceDesc, 'Desc order')
			return {
				...state,
				filteredProducts: [...sortedPriceDesc],
				filteredTF: true
			};

		// ---- FILTROS ---- //

		case FILTER_PRICE_ONLY_LESSTHAN:
			var filt1;
			if (state.filteredTF) {
				filt1 = state.filteredProducts.filter((e) => e.price < action.payload)
			}
			else {
				filt1 = state.products.filter((e) => e.price < action.payload)
			}
			// console.log('lessThan', filt1)
			return {
				...state,
				filteredProducts: [...filt1],
				filteredTF: true
			};

		case FILTER_PRICE_ONLY_MORETHAN:
			var filt2;
			if (state.filteredTF) {
				filt2 = state.filteredProducts.filter((e) => e.price > action.payload)
			}
			else {
				filt2 = state.products.filter((e) => e.price > action.payload)
			}
			// console.log('moreThan', filt2)
			return {
				...state,
				filteredProducts: [...filt2],
				filteredTF: true
			};

		case FILTER_PRICE_RANGE:
			var filt3;
			if (state.filteredTF) {
				filt3 = state.filteredProducts.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			}
			else {
				filt3 = state.products.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			}
			// console.log('filterPriceRange', filt3)
			return {
				...state,
				filteredProducts: [...filt3],
				filteredTF: true
			};

		case FILTER_CATEGORIES:
			var filt4;
			console.log(action.payload, 'categories Filters redux')
			if (state.filteredTF) {
				filt4 = state.filteredProducts.filter((e) => e.category === action.payload)
			}
			else {
				filt4 = state.products.filter((e) => e.category === action.payload)
			}
			return {
				...state,
				filteredProducts: [...filt4],
				filteredTF: true
			}

		// ---- Cart ---- //

		case ADD_TO_CART:
			// modificar name por id
			const item = state.products.find(item => item._id === action.payload.id)
			const inCart = state.cart.find(item => item._id === action.payload.id ? true : false)
			return {
				...state,
				cart: inCart ?
					state.cart.map(item => item._id === action.payload.id ?
						{ ...item, qty: item.qty + 1 }
						: item
					)
					: [...state.cart, { ...item, qty: 1 }]
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.map(item => item._id === action.payload.id ?
					{ ...item, qty: item.qty - 1 }
					: item
				)
			};

		case REMOVE_ITEM:
			return {
				...state,
				cart: state.cart.filter((item) => item._id !== action.payload.id)
			};

		case EMPTY_CART:
			return {
				...state,
				cart: []
			};


		//	--------------------------- USERS
		case GET_USER:

			return{
				...state,
				user: action.payload
			}

				// ---------------- PAGINATION
	

		case SET_LIMIT:
			return {
				...state,
				limit: action.payload
			}

		case GET_PRODUCT_DETAIL:
			return {
				...state,
				productDetail: action.payload
			};

		default:
			return state;
	}
};