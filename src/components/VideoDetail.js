import React, {Component} from 'react';
import {connect} from 'react-redux';
import selectVideo from '../reducers/selectedVideo';
class VideoDetail extends Component {
	// if (!this.props.selectedVideo) {
	// 	return (
	// 		<div class='ui active dimmer'>
	// 			<div class='ui loader'></div>
	// 		</div>
	// 	);
	// }

	render() {
		return <div>video detail</div>;
	}

	// const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	// return (
	// 	<div>
	// 		<div className='ui segment'>
	// 			<div className='ui embed'>
	// 				<iframe title='video player' src={videoSrc} />
	// 			</div>
	// 			<h4 className='ui header'>{video.snippet.title}</h4>
	// 			{/* <p>{video.snippet.description}</p> */}
	// 		</div>
	// 	</div>
	// );
}

const mapStateToProps = (state) => {
	console.log(state, 'video detail');

	return {select: state.selectVideo};
};
export default connect(mapStateToProps, {selectVideo})(VideoDetail);
