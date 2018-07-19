import React from 'react'

const VideoListItem = ({ id, title, image, updateCurrentVideo }) => (
    <div className="" onClick={() => updateCurrentVideo(id)}>
        <img className="img-thumbnail rounded" src={image} alt={title} />
        <h5 className="pull-right">{title}</h5>
  </div>
)

export default VideoListItem