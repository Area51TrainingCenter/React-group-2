import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({ videos, updateCurrentVideo }) => {
  return (
    <div className="col-md-4">
      <div className="list-group">
        {
          videos.map(video => (
            <VideoListItem 
              key={video.id} 
              video={video} 
              updateCurrentVideo={updateCurrentVideo} />
          ))
        }
      </div>
    </div>
  )
}

export default VideoList