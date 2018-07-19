import React, { Component } from 'react'
import search from 'youtube-api-v3-search'
import _ from 'lodash'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'

class VideoContainer extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      currentVideo: {},
    }
  }

  componentDidMount() {
    const API = ''
    const options = { q: 'ironman' }
    search(API, options).then(data => {
      const videos = data.items.map(video => Object.assign({}, {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        image: video.snippet.thumbnails.medium.url,
      }));
      
      this.setState({
        videos,
        currentVideo: videos[0],
      })
    })
  }

  updateCurrentVideo = id => {
    const currentVideo = this.state.videos.filter(video => video.id === id)
    this.setState({ currentVideo: currentVideo[0] })
  }

  

  render() {
    return (
      <div className="row">
        <VideoDetail {...this.state.currentVideo} />
        <VideoList updateCurrentVideo={this.updateCurrentVideo} videos={this.state.videos} />
      </div>
    )
  }
}

export default VideoContainer