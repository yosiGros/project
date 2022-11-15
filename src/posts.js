
import React from 'react'
import { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom';


const myUser = JSON.parse(localStorage.getItem('user'))
console.log(myUser.id);
const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${myUser.id}/posts`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [])

    return <div>
        <h1>posts:</h1>
        {
            posts.map((item, idx) =>
                <div key={idx}>
                    <h1  style={{ "border": "solid 1px", "backgroundColor": "pink" }}>
                    title: <Link to='Comments' type="text" >{item.title}</Link> 
                   </h1>
                </div>)
        }
        <Outlet/>
    </div>

}

export default Posts;