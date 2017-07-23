import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { doSearch } from '../actions/searchVideo';
import SearchBar from '../components/SearchBar';
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';

const VideoContainer = ({ search, selectedVideo, videos }) => (
    <div>
        <div className="row">
            <SearchBar search={search} />
        </div>
        <div style={{ display: 'flex' }}>
            <VideoDetail video={selectedVideo} />
            <VideoList videos={videos} search={search} />
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    search: video => {
        dispatch(doSearch(video))
    }  
});

const mapStateToProps = (state) => ({
        selectedVideo: state.selectedVideo, 
        videos: state.videos 
});

VideoContainer.propTypes = {
    search: PropTypes.func,
    selectedVideo: PropTypes.object,
    videos: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoContainer);