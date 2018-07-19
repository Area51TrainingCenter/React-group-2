import React, { Component } from 'react'
import search from 'youtube-api-v3-search'
import _ from 'lodash'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'
import SearchVideo from '../components/SearchVideo'
// import fuzzysearch from 'fuzzysearch'
import { debounce } from 'lodash'

class VideoContainer extends Component {
    constructor() {
        super()
        this.state = {
            videos: [],
            currentVideo: {},
            filteredVideos: [],
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData('iron man');
    }

    loadData(term) {
        const API = 'AIzaSyCbNNKJgCcCbjSr17s__hzO_eaU5TqGU_0'
        const options = { q: term }
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
                filteredVideos: videos
            })
        })
    }

    updateCurrentVideo = id => {
        const currentVideo = this.state.videos.filter(video => video.id === id)
        this.setState({ currentVideo: currentVideo[0] })
    }

    render() {
        const debounceSearch = debounce(data => {
            this.loadData(data)
        }, 500)

        return (
            <div className="row">
                <SearchVideo loadData={debounceSearch}/>
                <VideoDetail {...this.state.currentVideo} />
                <VideoList updateCurrentVideo={this.updateCurrentVideo} videos={this.state.filteredVideos} />
            </div>
        )
    }
}

export default VideoContainer