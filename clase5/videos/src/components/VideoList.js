import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos, updateCurrentVideo }) => {
    return (
        <div className="col-md-3">
            {
                videos.map(video => <VideoListItem key={video.id} {...video} updateCurrentVideo={updateCurrentVideo} />)
      }
    </div>
    )
}

export default VideoList