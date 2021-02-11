// import React, {Component} from 'react';
// import {connect} from 'react-redux';

// import {Field, reduxForm, formValueSelector} from 'redux-form';
// import {Form} from 'semantic-ui-react';

// class SearchBar extends Component {
// 	renderInput(formProps) {
// 		return (
// 			<div className='field'>
// 				<label htmlFor=''>Search</label>
// 				<input {...formProps.input} />
// 			</div>
// 		);
// 	}
// 	onSubmit = (formValues) => {
// 		console.log(formValues);
// 		// console.log('handlesubm', term);
// 		// console.log('*******', term);
// 		// console.log('*****handleSubmit', term);
// 		// this.props.searchVideo(formValues);
// 	};

// 	render() {
// 		return (
// 			<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
// 				<Field name='searchBar' component={this.renderInput} />
// 			</form>
// 		);
// 	}
// }

// SearchBar = reduxForm({
// 	form: 'searchBar',
// })(SearchBar);

// const selector = formValueSelector('searchBar');

// SearchBar = connect((state) => {
// 	const searchTerm = selector(state, 'searchBar');
// 	return searchTerm;
// })(SearchBar);

// export default SearchBar;

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {searchVideo, fetchVideos} from '../actions';
class Searchbar extends Component {
	handleChange = (event) => {
		this.setState({
			term: event.target.value,
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.searchVideo(this.state.term);
	};

	render() {
		return (
			<>
				<div className='search-bar ui segment'>
					<form onSubmit={this.handleSubmit} className='ui form'>
						<div className='field'>
							<label htmlFor='video-search'>Video Search</label>
							<input
								onChange={this.handleChange}
								name='video-search'
								type='text'
								placeholder='Search..'
							/>
						</div>
					</form>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state, 'mapstate');

	return {videos: Object.values(state.videos), searchVideo: searchVideo};
};
export default connect(mapStateToProps, {searchVideo, fetchVideos})(Searchbar);
