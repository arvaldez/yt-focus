import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

// import {fetchVideos, selectVideo, searchVideo} from '../actions';
import * as actionCreators from '../actions';
import selectedVideo from '../reducers/selectedVideo';
import {formValueSelector} from 'redux-form';
class VideoList extends Component {
	constructor(props) {
		super(props);
		const {dispatch} = props;

		this.boundActionCreators = bindActionCreators(actionCreators, dispatch);
	}
	componentDidMount() {
		let {dispatch} = this.props;

		let action = actionCreators.searchVideo;
		dispatch(action);
	}

	componentDidUpdate(prevProps) {
		let {dispatch} = this.props;
		if (this.props.searchVideo !== prevProps.searchVideo) {
			let action = actionCreators.fetchVideos(this.props.searchVideo);
			dispatch(action);
		}
	}

	selectVideo = (video) => {
		let action = actionCreators.selectVideo(video);
		this.props.dispatch( action );
		
	};
	renderList() {
		if (!this.props.videos.items) {
			return 'loading videos...';
		}

		console.log(this.props.videos.items, 'renderlist');
		return this.props.videos.items.map((video) => {
			return (
				<div
					onClick={() => this.selectVideo(video)}
					key={video.id.videoId}
					className='item video-item'>
					<img
						alt={video.snippet.title}
						className='ui image'
						key={video.id.videoId}
						src={video.snippet.thumbnails.medium.url}
					/>
					<div className='content'>
						<div className='header'>{video.snippet.title}</div>
					</div>
				</div>
			);
		});
	}

	renderContent() {
		if (!this.props.videos) {
			return 'loading videos...';
		}

		return this.renderList();
	}

	render() {
		return (
			<div>
				<div>{this.renderContent()}</div>{' '}
			</div>
		);
	}
}

export default connect((state) => ({
	videos: state.videos,
	searchVideo: state.searchVideo,
	select: state.selectVideo,
}))(VideoList);
