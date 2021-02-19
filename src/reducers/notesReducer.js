/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_NOTES':
			return {...state, ..._.mapKeys(action.payload, 'id')};
		case 'FETCH_NOTE':
			return {...state, [action.payload.id]: action.payload}; //key interpolation
		// case CREATE_STREAM:
		// 	return {...state, [action.payload.id]: action.payload};
		// case EDIT_STREAM:
		// 	return {...state, [action.payload.id]: action.payload};
		// case DELETE_STREAM:
		// 	return _.omit(state, action.payload);
		default:
			return state;
	}
};
