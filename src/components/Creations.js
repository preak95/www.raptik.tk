import React from 'react';
import BlogList from './BlogList';
import { useState } from 'react';

const Creations = () => {
    const [blogs, setBlogs] = useState([
        {
            "id": 1,
            "title": "Online diary",
            "content": "A place where anyone could write their thoughts and make sure that I read them. :p",
            "links": [
                {"key": "Project link", "value": "https://diary.raptik.tk"},
                {"key": "Resource", "value": "https://www.google.com"}
            ]
        },
        {
            "id": 2,
            "title": "IoT electrical outlet",
            "content": "An electrical board where each outlet could be controlled using Google assistant",
            "links": [
                {"key": "Project link", "value": "https://github.com/preak95/Automation-Via-GoogleAssistant"}
            ]
        }
    ])
    return(
        <div className="container">
            <BlogList blogs={ blogs }/>
        </div>
    )
}

export default Creations;