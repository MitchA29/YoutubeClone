import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {

    const handleClick = (event, id, title) => {
        event.preventDefault();
        props.getVideoIdTitle(id, title);
        props.getRelatedVideoList(title);
    }

    return (
        <div className="searchResults">
            <div className="allRelatedVideos">
                {props.videos.map(videos => (
                    <span>
                        <div class="relatedVideo">
                        <input type="image" onClick={(event) => handleClick(event, videos.id.videoId, videos.snippet.title)} src={videos.snippet.thumbnails.medium.url}
                            width={videos.snippet.thumbnails.medium.width}
                            height={videos.snippet.thumbnails.medium.height} />
                            <div class="relatedVideoTitle">
                                {videos.snippet.title}
                            </div>
                        </div>
                    </span>
                ))}
            </div>
        </div> 
    );
}
 
export default SearchResults;