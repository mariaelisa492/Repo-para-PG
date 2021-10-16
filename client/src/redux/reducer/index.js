import {
	GET_PRODUCTS, GET_BYNAME,
	ORDER_PRICE_ASC, ORDER_PRICE_DESC,
	FILTER_PRICE_ONLY_LESSTHAN, FILTER_PRICE_ONLY_MORETHAN,
	FILTER_PRICE_RANGE, DELETE_PRODUCT
} from "../constants/index"

const initialState = {
	users: [],
	sales: [],
	products: [],
	filteredProducts: [],
	filteredTF: false
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

		case ORDER_PRICE_ASC:
				var sortedPriceAsc
				if(state.filteredTF){
					sortedPriceAsc = state.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1)
			}
				else{
					sortedPriceAsc = state.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
				}
			return {
				...state,
				filteredProducts: [...sortedPriceAsc],
				filteredTF: true
			};

		case ORDER_PRICE_DESC:
			var sortedPriceDesc
			if(state.filteredTF){
				   sortedPriceDesc = state.filteredProducts.sort((a, b) => (a.price > b.price) ? -1 : 1)
			}
			else{
				   sortedPriceDesc = state.products.sort((a, b) => (a.price > b.price) ? -1 : 1)
			}
			console.log(sortedPriceDesc, 'Desc order')
			return {
				...state,
				filteredProducts: [...sortedPriceDesc],
				filteredTF: true
			};

		case FILTER_PRICE_ONLY_LESSTHAN:
			var filt1;
			if(state.filteredTF){
				filt1 = state.filteredProducts.filter((e) => e.price < action.payload)
			}
			else{
				filt1 = state.products.filter((e) => e.price < action.payload)
			}
			console.log('lessThan', filt1)
			return {
				...state,
				filteredProducts: [...filt1],
				filteredTF: true
			};

		case FILTER_PRICE_ONLY_MORETHAN:
			var filt2;
			if(state.filteredTF){
				filt2 = state.filteredProducts.filter((e) => e.price > action.payload)
			}
			else{
				filt2 = state.products.filter((e) => e.price > action.payload)
			}
			console.log('moreThan', filt2)
			return {
				...state,
				filteredProducts: [...filt2],
				filteredTF: true
			};

		case FILTER_PRICE_RANGE:
			var filt3;
			if(state.filteredTF){
				filt3 = state.filteredProducts.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			}
			else{
				filt3 = state.products.filter((e) => e.price > action.payload.price1 && e.price < action.payload.price2)
			}
			console.log('filterPriceRange', filt3)
			return {
				...state,
				filteredProducts: [...filt3],
				filteredTF: true
			};

		default:
			return state;
	}
};