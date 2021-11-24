import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Comments from './Comments/Comments';
import axios from 'axios';
import SearchResults from './SearchResults/SearchResults';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: []
    }
}
    getVideoList = async (searchFor) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUFW6W2O6Mqz3liLuFKlGvg4H4ITggyGA&kind="video"&part=snippet&maxResults=5&q=' + (searchFor))
        console.log(response.data.items)
        this.setState({
            videos: response.data.items
        })
    }
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <VideoPlayer />
                <Comments />
                <SearchBar getVideoList={this.getVideoList}/>
                <SearchResults videos={this.state.videos}/>
            </div>
        )
    }
}
export default App;