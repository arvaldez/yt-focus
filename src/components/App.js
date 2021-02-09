import React from 'react';

import VideoList from './VideoList';

import {Container} from 'semantic-ui-react';
import SearchBar from './Searchbar';

const App = () => {
	return (
		<Container>
			<SearchBar />
			<VideoList />
		</Container>
	);
};

export default App;
