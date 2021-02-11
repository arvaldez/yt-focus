import youtube from '../apis/youtube';

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
	dispatch( { type: 'SEARCH_VIDEO', payload: term } );
	
	

};

export const selectVideo = (video) => (dispatch) => {
	dispatch({
		type: 'SELECTED_VIDEO',
		payload: video,
	});
};
