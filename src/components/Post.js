import React from 'react';

/* The idea is to get JSON for all the posts that I wanna display
Format:
{
    "Sid": "posts",
    "posts": [
        {
            "title": "Some cheesy title",
            "content": "This is the description related to the post itself"
            "links": [
                "www.aisa.com",
                "www.vaisa.com"
            ]
        }
    ]
}
This will be feteched from S3
*/
const Post = () => {
    return(
        <div className="container">
            <h1 className="center">Home page</h1>
            <p className="centre">Hey! What is up!?</p>
        </div>
    )
}

export default Post;