// eslint-disable-next-line import/no-anonymous-default-export

import _ from 'lodash';

const initialState = {
	ytSearchState: [],
};
export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_VIDEOS':
			return action.payload;

		default:
			return state;
	}
};

// // eslint-disable-next-line import/no-anonymous-default-export

// import _ from 'lodash';

// const initialState = {
// 	ytSearchState: [],
// };
// export default (state = {}, action) => {
// 	switch (action.type) {
// 		case 'FETCH_VIDEOS':
// 			return {...state, ..._.mapKeys(action.payload, 'id')};

// 		default:
// 			return state;
// 	}
// };
