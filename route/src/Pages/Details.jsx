import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();

  const [post,setposts]=useState();
   const postdata =async()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setposts(data);
      console.log('hi');
   };
   useEffect(() => {
      postdata();
    }, []);

    // if(!post){
    //    return <div>loading...</div>
    // }
   
  return (
    <div>
      
      <h2>Post Details</h2>

      <h1>{post?.title}</h1>
      <h3>{post?.body}</h3>
    </div>
  );
}
