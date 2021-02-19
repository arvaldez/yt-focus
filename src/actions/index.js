import youtube from '../apis/youtube';
import notes from '../apis/notes';
import history from '../history';

export const fetchVideos = (term) => async (dispatch) => {
	console.log('****fetvideos', term);
	const response = await youtube.get('/search', {
		params: {
			q: term,
		},
	});

	dispatch({type: 'FETCH_VIDEOS', payload: response.data});
};

export const searchVideo = (term) => async (dispatch) => {
	dispatch({type: 'SEARCH_VIDEO', payload: term});
};

export const selectVideo = (video) => (dispatch) => {
	dispatch({
		type: 'SELECTED_VIDEO',
		payload: video,
	});
};

export const fetchNotes = () => async (dispatch) => {
	const response = await notes.get('/notes');
	dispatch({type: 'FETCH_NOTES', payload: response.data});
};

export const fetchNote = (id) => async (dispatch) => {
	const response = await notes.get(`/notes/${id}`);
	dispatch({type: 'FETCH_NOTE', payload: response.data});
};

export const createNote = (formValues) => async (dispatch, getState) => {
	// const {userId} = getState().auth;
	const response = await notes.post('/streams', {...formValues});

	dispatch({type: 'CREATE_NOTE', payload: response.data});

	//do some programmatic navigation to
	//get the user back to the root route
	history.push('/');
};

// export const editStream = (id, formValues) => async (dispatch) => {
// 	const response = await streams.patch(`/streams/${id}`, formValues);
// 	dispatch({type: EDIT_STREAM, payload: response.data});
// 	history.push('/');
// };

// export const deleteStream = (id) => {
// 	return async (dispatch) => {
// 		await streams.delete(`/streams/${id}`);
// 		dispatch({type: DELETE_STREAM, payload: id});
// 		history.push('/');
// 	};
// };
