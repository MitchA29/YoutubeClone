import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Comments from './Comments/Comments';
import axios from 'axios';
import SearchResults from './SearchResults/SearchResults';
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import "./App.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultVideos: [],
            relatedVideos:[]
    }
        this.videoId = "";
        this.videoTitle = "YouTube Developers Live: Embedded Web Player Customization"
}
    getResultVideoList = async (searchFor) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUFW6W2O6Mqz3liLuFKlGvg4H4ITggyGA&kind="video"&part=snippet&maxResults=5&q=' + (searchFor))
        console.log(response.data.items)
        this.setState({
            resultVideos: response.data.items
        })
    }

    getRelatedVideoList = async (videoTitle) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUFW6W2O6Mqz3liLuFKlGvg4H4ITggyGA&kind="video"&part=snippet&maxResults=5&q=' + (videoTitle))
        console.log(response.data.items)
        this.setState({
            relatedVideos: response.data.items
        })
    }

    getVideoIdTitle = (videoId, videoTitle) => {
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        console.log(this.videoId);
        this.setState({
            resultVideos: []
        });
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="videoCommentsRecommended">
                    <div className="videoComments">
                        <VideoPlayer videoId={this.videoId} videoTitle={this.videoTitle}/> 
                        <Comments />
                    </div>
                    <div className="recommended">
                        <RecommendedVideos videos={this.state.relatedVideos} videoId={this.videoId}/>
                    </div>
                </div>
                <SearchBar getVideoList={this.getResultVideoList}/>
                <SearchResults videos={this.state.resultVideos} getRelatedVideoList={this.getRelatedVideoList}
                    getVideoIdTitle={this.getVideoIdTitle}/>
            </div>
        )
    }
}
export default App;