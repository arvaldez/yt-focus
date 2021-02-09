export default (state = {}, action) => {
	switch (action.type) {
		case 'SEARCH_VIDEO':
			return {...state, term: action.payload};

		default:
			return state;
	}
};
