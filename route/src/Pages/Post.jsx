import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Post(){

     const [posts,setposts]=useState([]);

 const postdata =async()=>{
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setposts(data);
 };
 useEffect(() => {
    postdata();
  }, []);


     return <div>
     <h2>Post</h2>
     <Link to='/home'>HOME</Link>
     <ol>
        {posts.map((post) => (
        <li> 
       <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>))}
     </ol>
   </div>
}