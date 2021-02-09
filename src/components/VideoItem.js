// import React, {Component} from 'react';
// import {connect} from 'react-redux';

// import {fetchVideos, selectVideo} from '../actions';
// import selectedVideo from '../reducers/selectedVideo';
// class VideoItem extends Component {

// 	onSelect = ( video ) => {
// 		this.props.videos.
// 	}
// 	render() {
// 		console.log(this.props, 'videoItem');
// 		return (
// 			<div>hello</div>

// 			// <div onClick={() => this.props.selectVideo(selectedVideo)} className='item video-item'>
// 			// 	<img
// 			// 		alt={video.snippet.title}
// 			// 		className='ui image'
// 			// 		src={video.snippet.thumbnails.medium.url}
// 			// 	/>
// 			// 	<div className='content'>
// 			// 		<div className='header'>{video.snippet.title}</div>
// 			// 	</div>
// 			// </div>
// 		);
// 	}
// }

// const mapStateToProps = (state, ownProps) => {
// 	console.log(state, 'mapstate-item');

// 	return {
// 		videos: Object.values(state.videos),
// 		selectedVideo: state.videos[ownProps.video],
// 	};
// };

// export default connect(mapStateToProps, {fetchVideos, selectVideo})(VideoItem);
