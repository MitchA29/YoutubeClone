import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
<<<<<<< HEAD
import VideoPlayer from './VideoPlayer/VideoPlayer';
=======
import axios from 'axios';
>>>>>>> 8456ea45341fe7d9435911bfa9d61598b6dcf662


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: []
    }
}

    getVideoList = async (searchFor) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAUFW6W2O6Mqz3liLuFKlGvg4H4ITggyGA&kind="video"&part=snippet&q=' + {searchFor})
        console.log(response.data.items)
        this.setState({
            videos: response.data.items
        })
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
<<<<<<< HEAD
                <VideoPlayer />
                <SearchBar />
=======
                <SearchBar getVideoList={this.getVideoList}/>
>>>>>>> 8456ea45341fe7d9435911bfa9d61598b6dcf662
            </div>
        )
    }
}

export default App;