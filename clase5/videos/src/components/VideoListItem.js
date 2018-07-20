import React from 'react'

const VideoListItem = ({video, updateCurrentVideo}) => (
  <div className="list-group-item">
    <div className="row" onClick={() => updateCurrentVideo(video)}>
      <div className="col-sm-5">
        <img 
          className="img-fluid rounded" 
          src={video.image} 
          alt={video.title} />
      </div>
      <h6 className="pull-right col-sm-7">{video.title}</h6>
    </div>
  </div>
)

export default VideoListItem