import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
import VideoPlayer from './VideoPlayer/VideoPlayer';


class App extends Component {
    constructor(props){
        super(props);
        this.state = [
        ];
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <VideoPlayer />
                <SearchBar />
            </div>
        )
    }
}

export default App;