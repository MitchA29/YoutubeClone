import React from "react";
import "./SearchBar.css"
import 'bootstrap/dist/css/bootstrap.css';

function SearchBar(props){
    return (
        <div class="searchBarParent">
            <div class="searchField">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button type="button" class="btn btn-danger">Search</button>
                    </form>
                    </div>
            </nav>
            </div>
        </div>
    )
}

export default SearchBar;