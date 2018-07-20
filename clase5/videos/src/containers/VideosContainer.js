import React, { Component } from 'react'
import search from 'youtube-api-v3-search'
import _ from 'lodash'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'
import VideoSearch from '../components/VideoSearch'

const API = 'AIzaSyCbNNKJgCcCbjSr17s__hzO_eaU5TqGU_0'

class VideoContainer extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      currentVideo: {},
      isLoading: false,
    }
  }

  componentDidMount() {
    this.callVideos('señora K');
  }

  callVideos = (term) => {
    this.setState({ isLoading: true })
    const opts = {q: term}
    search(API, opts).then(data => {
      const videos = data.items.map(video => Object.assign({}, {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        image: video.snippet.thumbnails.medium.url,
      }));

      setTimeout(() => {
        this.setState({
          videos: videos,
          currentVideo: videos[0],
          isLoading: false
        });
      }, 1000)
    });
  }

  render() {
    const debounceCallVideos = _.debounce(term => {
      const q = term.length ? term : 'señora K'
      this.callVideos(q);
    }, 300);

    return (
      <div>
        <div className="mt-4 mb-4">
          <VideoSearch onSearchTermChange={debounceCallVideos} />
        </div>
        {
          this.state.isLoading ?
          <div className="loader">
            <div className="shadow"></div>
            <div className="box"></div>
          </div> :
          <div className="row">
            <VideoDetail {...this.state.currentVideo} />
            <VideoList 
              updateCurrentVideo={currentVideo => this.setState({ currentVideo })} 
              videos={this.state.videos} />
          </div>
        }
      </div>
    )
  }
}

export default VideoContainer