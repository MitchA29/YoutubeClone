import React from 'react';
import './RecommendedVideos.css';

const RecommendedVideos = (props) => {
    
    const handleClick = (event, id, title) => {
        event.preventDefault()
        props.getVideoIdTitle(id, title)
    }
    
    return (
        <div className="recommendedVideos">
            <h1>Recommended Videos</h1>
            <div className="allRelatedVideos">
                {props.videos.filter(videos => !videos.id.videoId.includes(props.videoId)).map(videos => (
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
 
export default RecommendedVideos;