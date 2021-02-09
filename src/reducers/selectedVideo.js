// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
	if (action.type === 'SELECTED_VIDEO') {
		return action.payload;
	}

	return state;
};
