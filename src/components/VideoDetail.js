import React from 'react';
import PropTypes from 'prop-types';

const checkVideo = (title, url, description) => (
    <div style={{flex: 2}}>
        <div className="thumbnail">
            <div className="embed-responsive embed-responsive-16by9">                                             
                <iframe className="embed-responsive-item" src={ url }></iframe>
            </div>
            <h2 className="caption">{ title }</h2> 
            <p style={{ marginTop: 20 }}>{ description }</p>
        </div>
    </div>
)

const VideoDetail = ({ video }) => {
    if (!video.id) {
        const videoId = "Amq-qlqbjYA";
        const description = "Download on iTunes @ http://smarturl.it/BLACKPINK_3RD Download on AppleMusic @ http://smarturl.it/3RD_BLACKPINK #BLACKPINK #블랙핑크 #마지막처럼 ...";
        const title = "BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V";
        const url = `https://youtube.com/embed/${videoId}`
        return checkVideo(title, url, description);
    }

    const url = `https://youtube.com/embed/${ video.id.videoId }`;
    return checkVideo(video.snippet.title, url, video.snippet.description);
}

VideoDetail.propTypes = {
    video: PropTypes.object.isRequired
}

export default VideoDetail;