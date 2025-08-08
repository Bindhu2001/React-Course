import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const load = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
        setLoading(false);
    };

    useEffect(() => {
        load();
    }, [id]);

    
    const update = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;                                                                 
        const content = e.target.content.value;

        await fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content }),
        });

        navigate("/"); 
    }

    if (loading) return <div>Loading...</div>;

    return (
        <form onSubmit={update} className="container">
            <h1>Update Blog</h1>
            <Link to={`/${id}`}>Back</Link>
            <br />
            <label htmlFor="title">Title</label>
            <br />
            <input
                type="text"
                name="title"
                defaultValue={blog.title}
            />
            <br />
            <label htmlFor="content">Content</label>
            <br />
            <textarea
                name="content"
                defaultValue={blog.content}
            ></textarea>
            <br />
            <input type="submit" value="Update" />
        </form>
    );
}
