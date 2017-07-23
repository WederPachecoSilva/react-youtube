import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from './VideoListItem';

const VideoList = ({ videos, search }) => (
        <div style={{flex: 1}} className="list-group">
            { videos.map(video => <VideoListItem key={video.id.videoId} search={search} video={video} />) }
        </div>
);

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired
}

export default VideoList;