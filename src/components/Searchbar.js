import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchVideo} from '../actions';
import {Form} from 'semantic-ui-react';

class SearchBar extends Component {
	state = {term: ''};

	handleSubmit = (term) => {
		console.log('handlesubm', term);
		console.log('*******', term);
		console.log('*****handleSubmit', term);
		this.props.searchVideo(term);
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Field>
					<label>Search Video</label>
					<Form.Input value={this.state.term} onChange={this.onInputChange} />
				</Form.Field>
			</Form>
		);
	}

	onInputChange = (event) => {
		this.setState({term: event.target.value});
	};
}

const mapStateToProps = (state) => {
	console.log(state, 'state');
	return {searchVideo: searchVideo};
};

export default connect(mapStateToProps, {searchVideo})(SearchBar);
