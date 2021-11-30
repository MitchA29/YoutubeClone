import React, { useState } from "react";
import "./Comments.css"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

const Comments = (props) => {
    const [reply,setReply]=useState('')
    const [comment, setComment]=useState('')

    const handleSubmitReply = async(event,id) => {
        event.preventDefault();
        let newReply ={
            comment_id:id,
            reply_content:reply
        }
        await axios.post('http://127.0.0.1:8000/replies/', newReply)
       
    }
    const handleChangeReply=(event)=>{
        setReply(event.target.value)
    }

    const handleSubmitComment = async(event, videoId) => {
        event.preventDefault();
        let newComment ={
            video_id:videoId,
            comment_content:comment,
            likes:0,
            dislikes:0
        }
        await axios.post('http://127.0.0.1:8000/comments/', newComment)
       
    }
    const handleChangeComment=(event)=>{
        setComment(event.target.value)
    }

    return (
        <div className="commentSection">
            <h1>Comments</h1>
                {props.commentDetails.map(comments => (
                    <div>
                        {comments.comment_content}
                        <form name='reply' onSubmit={(e)=>handleSubmitReply(e,comments.id)}>
                            <input name='reply' onChange={handleChangeReply} placeholder='Reply'/>
                            <button type='submit'>Reply</button>
                        </form>
                    </div>

                ))}

            <div class="mb-3">
                <form name="comment" onSubmit={(e)=>handleSubmitComment(e, props.videoId)}>
                    <input name="comment" onChange={handleChangeComment} placeholder='Your Comment Here'/>
                    <button type='submit'>Comment</button>
                </form>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="commentButton" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
        </div>
       
    )
}

export default Comments;