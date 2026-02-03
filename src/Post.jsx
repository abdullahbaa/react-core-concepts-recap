import { useEffect, useState } from "react"
import Post from "./Posts";

export default function Posts(){
    const [post,setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return(
        <div>
            <h3>Posts: {post.length}</h3>
            {
                post.map(Post => {
                     <Post></Post>;
                })
            }
        </div>
    )
}

/**
 * 1- Create a state to store the data
 * 2- Create use effect with no dependencies
 * 3-use fetch to load data
 */