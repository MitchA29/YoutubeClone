import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    return ( 
        <div>
            {props.videos.map(videos => (
                <span>
                    <div class="relatedVideos">
                    <img src={videos.snippet.thumbnails.medium.url}
                        width={videos.snippet.thumbnails.medium.width}
                        height={videos.snippet.thumbnails.medium.height} />
                        <div class="relatedVideoTitle">{videos.snippet.title}</div>
                    </div>
                </span>
            ))}
        </div>
     );
}
 
export default SearchResults;