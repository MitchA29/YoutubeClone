import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';


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
                <SearchBar getVideoList={this.getVideoList}/>
            </div>
        )
    }
}

export default App;