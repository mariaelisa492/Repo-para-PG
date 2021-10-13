const initialState = {
	users: [],
    sales:[],
    products:[]
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_PRODUCTS':
			return { ...state,
				products: action.payload
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
		case '':
			return {
				
			};
		default:
			return state;
	}
};