import {
	GET_PRODUCTS, GET_BYNAME,
	ORDER_PRICE_ASC, ORDER_PRICE_DESC,
	FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN, NO_FILTER,
	FILTER_PRICE_RANGE, DELETE_PRODUCT,
	ADD_TO_CART, REMOVE_FROM_CART,
	REMOVE_ITEM, EMPTY_CART, FILTER_CATEGORIES, SET_LIMIT,
	GET_MY_ORDERS, GET_SINGLE_PRODUCT, UPDATE_PRODUCT, GET_PRODUCT_DETAIL,
	ADD_PRODUCT_FAV, REMOVE_PRODUCT_FAV, SET_USER, EDIT_USER, GET_QUESTIONS_BY_PRODUCT,
	GET_ALL_UNANSWERED_QUESTIONS,
	ADD_PRODUCT_FAV, REMOVE_PRODUCT_FAV, UPDATE_ORDER, DELETE_ORDER, GET_WISHLIST, UPDATE_ABOUT, GET_ABOUT
} from "../constants/index"


const initialState = {
	users: [],
	sales: [],
	product: {},
	products: [],
	filteredProducts: [],
	cart: localStorage.items?.length > 0 ? JSON.parse(localStorage.getItem('items')) : [],
	limit: 0,
	currentItem: null,
	category: null,
	priceRange: false,
	filteredTF: false,
	user: {},
	order: {},
	orders: [],
	productDetail: {},
	productsFavs:[],
	questions:[],
	wishList:[],
	about: {},
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

		case UPDATE_ORDER:
			const indice = state.orders.findIndex(order => order._id === action.payload._id);
			state.orders[indice] = action.payload;
			console.log(action.payload, "payload de mi UPDATE_ORDER")
			return {
				...state,
				orders: [...state.orders]
			};

		case DELETE_ORDER:
			let deletedOrder = state.orders.filter(el => el._id !== action.payload._id)
			return {
				...state,
				orders: [...deletedOrder]
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
			const index = state.products.findIndex(product => product._id === action.payload._id);
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
      // Si filtramos de nuevo sobre el filtrado anterior, no habra coincidencias
      // Recarguemos esto primero.  SOLUCION PROVISORIA, llamado a una ruta con 
      // filtrado seria lo ideal.
			var temp;
			if (state.category) {
				temp = state.products.filter(p => p.category === state.category);
			} else {
				temp = [...state.products];
			}

			if (state.filteredTF) {
				filt3 = temp.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			}
			else {
				filt3 = temp.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			}
			// console.log('filterPriceRange', filt3)
			return {
				...state,
				filteredProducts: [...filt3],
				filteredTF: true,
        		priceRange: true
			};

		case FILTER_CATEGORIES:
			var filt4;
			console.log(action.payload, 'categories Filters redux')
      	/*
			if (state.filteredTF) {
				filt4 = state.filteredProducts.filter((e) => e.category === action.payload)
			}
			else {
				filt4 = state.products.filter((e) => e.category === action.payload)
			}
      	*/
      	// Arreglo provisorio, lo ideal seria una llamada al servidor
      		filt4 = state.products.filter((e) => e.category === action.payload)
			return {
				...state,
				filteredProducts: [...filt4],
				filteredTF: true,
				category: action.payload,
				priceRange: false,
			}

		case NO_FILTER:
			return {
				...state,
				filteredProducts: [...state.products],
				filteredTF: false,
				priceRange: false,
			}

		// ---- Cart ---- //
		
		case ADD_TO_CART:
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

		case SET_USER:

			return {
				...state,
				user: action.payload
			}

		case EDIT_USER:

			return {
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

		// -------- WishList

		case GET_WISHLIST:
			return {
				...state,
				wishList: [...action.payload]
			}

		// --------- About

		case GET_ABOUT:
			return {
				...state,
				about: action.payload
			}
		case UPDATE_ABOUT:
			return {
				...state,
				about: action.payload
			}

			// ----------------- QUESTIONS

		case GET_QUESTIONS_BY_PRODUCT:
			return{
				...state,
				questions: action.payload
			}

		case GET_ALL_UNANSWERED_QUESTIONS:
			return{
				...state,
				questions: action.payload
			}


		default:
			return state;
	}
};
