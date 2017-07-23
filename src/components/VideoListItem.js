import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, search }) => (
    <div style={{ height: 200 }} className="list-group-item video" onClick={() => search(video.snippet.title)} >
        <div className="row">
            <div className="col-md-5">
                <img className="img-responsive" src={video.snippet.thumbnails.high.url}/>
            </div>
            <div className="col-md-7">
                <h3 className="text-justified">{ video.snippet.title }</h3>
                <h4 style={{marginTop: 20}}>{ video.snippet.channelTitle }</h4>
            </div>
        </div>
    </div>
);

VideoListItem.propTypes = {
    video: PropTypes.object.isRequired,
    search: PropTypes.func.isRequired
}

export default VideoListItem;

