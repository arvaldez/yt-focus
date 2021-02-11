import axios from 'axios';
const KEY = 'AIzaSyD7vTRtrCql-NzMpOVionXQq1PXKSnMPj4';
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 10,
		key: KEY,
	},
});
