import React, { Component } from 'react';
import TitleBar from './TitleBar/TitleBar';


class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Dune", author: "Frank Herbert"},
            {title: "1984", author: "George Orwell"},
            {title: "The Giver", author: "Lois Lowry"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
            </div>
        )
    }
}

export default App;