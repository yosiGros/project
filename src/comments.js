import React from 'react'
import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';

let myUser;
if (localStorage.getItem('user')) {
    try {
        myUser = JSON.parse(localStorage.getItem('user'))
        console.log(myUser.id);
    } catch (error) { }
}
const Comments = () => {
    const [comments, setComments] = useState([])


    useEffect(() => {
        if (myUser) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${myUser.id}/comments`)
            .then(response => response.json())
            .then(comments => setComments(comments))
        }
    }, [])

    return <div>
        <h1>comments:</h1>
        {
            comments.map((item, idx) =>

                <h1 key={idx} style={{ "border": "solid 1px", "backgroundColor": "pink" }}>
                    name: {item.name} body: {item.body}
                </h1>
            )
        }
    </div>

}
{/* <Outlet /> */ }
export default Comments;