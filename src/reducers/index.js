import {combineReducers} from 'redux';

import selectedVideo from './selectedVideo';
import videoReducer from './videoReducer';
import searchVideo from './searchVideo';
export default combineReducers({
	videos: videoReducer,
	selectedVideo: selectedVideo,
	searchVideo: searchVideo,
});
