import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchVideos, selectVideo} from '../actions';
import selectedVideo from '../reducers/selectedVideo';

class VideoList extends Component {
	componentDidMount() {
		this.props.fetchVideos('study');
	}
	renderList() {
		if (!this.props.videos[0]) {
			return 'loading videos...';
		}

		console.log(this.props.videos[0], 'renderlist');
		return this.props.videos[0].map((video) => {
			return (
				<div
					onClick={() => this.props.selectVideo(video)}
					key={video.id.videoId}
					className='item video-item'>
					<img
						alt={video.snippet.title}
						className='ui image'
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
		console.log(selectVideo);
		return (
			<div>
				<div>{this.renderContent()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state, 'mapstate');
	return {videos: Object.values(state.videos), selectedVideo: selectedVideo};
};

export default connect(mapStateToProps, {fetchVideos, selectVideo})(VideoList);
