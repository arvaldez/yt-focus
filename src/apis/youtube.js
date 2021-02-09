import axios from 'axios';
const KEY = 'AIzaSyBwYH4voKKvuw3lrN2IWuAM8mkEHxZX4QY';
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,
	},
});
