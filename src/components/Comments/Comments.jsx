import React from "react";
import "./Comments.css"
import 'bootstrap/dist/css/bootstrap.css';

const Comments = (props) => {

    return (
        <div className="commentSection">
            <h1>Comments</h1>
            <div className="userComment">
<<<<<<< HEAD
=======
                <h1>Comments</h1>
                    {props.commentDetails.map(comments => (
                        <div>
                            {comments.comment_content}
                        </div>
                    ))}
>>>>>>> 0ae8f03eb25073e11d77b78283a0ae297afe4866
                <form action="/html/tags/html_form_tag_action.cfm" method="post">
                <div class="mb-3">
                    <textarea name="comments" id="comments">
                    Your Comment Here
                    </textarea>
                </div>
                <button type="submit" value="Submit" class="commentButton"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="commentButton" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg></button>
                </form>
                
            </div>
        </div>
       
    )
}

export default Comments;