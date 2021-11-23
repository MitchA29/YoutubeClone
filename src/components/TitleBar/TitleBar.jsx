import React from "react";
import "./TitleBar.css"
import 'bootstrap/dist/css/bootstrap.css';

function TitleBar(props){
    return (
        <div className="row row-space">
            <div className="col-md-12" style={{ padding: 0 }}>
                <div className="titlebar-nav">
                    <div class="logo">
                        <svg  xmlns="http://www.w3.org/2000/svg" width="100" height="64" fill="currentColor" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                            <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        </svg>
                        <h1>Youtube</h1>
                    </div>
                    <div class="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default TitleBar;