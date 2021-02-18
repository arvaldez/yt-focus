// import React from 'react';

// import VideoList from './VideoList';

// import {Container} from 'semantic-ui-react';
// import SearchBar from './Searchbar';

// const App = () => {
// 	return (
// 		<Container>
// 			<SearchBar />
// 			<VideoList />
// 		</Container>
// 	);
// };

// export default App;

import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import VideoList from './VideoList';

import {Container} from 'semantic-ui-react';
import VideoSearchList from './VideoSearchList';

import Searchbar from './Searchbar';
import history from '../history';
import Header from './Header';
import VideoDetail from './VideoDetail';
const App = () => {
	return (
		<Container>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/youtube' component={VideoSearchList} />
					<Route path='/note' component={VideoDetail} />
					{/* <Route path='/streams/edit/:id' component={StreamEdit} />
					<Route path='/streams/delete/:id' component={StreamDelete} />
					<Route path='/streams/:id' component={StreamShow} />
					<Route path='/youtube' component={YoutubeSearch} /> */}
				</Switch>
			</Router>
		</Container>
	);
};

export default App;
