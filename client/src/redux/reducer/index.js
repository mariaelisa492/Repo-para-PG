const initialState = {
	users: [],
    sales:[],
    products:[],
	filteredProducts:[]
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return { ...state,
				products: action.payload,
				filteredProducts: action.payload
			};
		case 'GET_BYNAME':
			return { ...state,
				filteredProducts: [...action.payload]
			};
		case '':
			return {
				
			};
		case '':
			return {
				
			};
		case '':
			return {
				
			};
		default:
			return state;
	}
};