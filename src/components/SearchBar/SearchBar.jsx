import React from "react";
import "./SearchBar.css"
import 'bootstrap/dist/css/bootstrap.css';

const SearchBar = (props) => {

    let handleSubmit = (event) => {
        event.preventDefault();
        let searchFor = document.getElementById('searchFor').value;
        console.log(searchFor);
        props.getVideoList(searchFor);
    }

    return (
        <div class="searchBarParent">
            <div class="searchField">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form onSubmit={(event) => handleSubmit(event)} class="d-flex">
                        <input id="searchFor" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button type="submit" class="btn btn-danger">Search</button>
                    </form>
                    </div>
            </nav>
            </div>
        </div>
    )
}

export default SearchBar;