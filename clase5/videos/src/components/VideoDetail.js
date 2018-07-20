import React from 'react'

const VideoDetail = ({ id, title, description }) => {
  const videoUrl = `https://www.youtube.com/embed/${id}`
  return (
    <div className="col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
          className="embed-responsive-item" 
          src={videoUrl}
          allowFullScreen></iframe>
      </div>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoDetail