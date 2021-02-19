import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import notesReducer from './notesReducer';
import selectedVideo from './selectedVideo';
import videoReducer from './videoReducer';
import searchVideo from './searchVideo';

export default combineReducers({
	videos: videoReducer,
	selectedVideo: selectedVideo,
	searchVideo: searchVideo,
	notes: notesReducer,
	form: formReducer,
});
