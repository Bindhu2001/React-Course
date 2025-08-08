import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Blog() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  const load = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`);
    const data = await res.json();
    setBlog(data);
    setLoading(false);
  };

  const onDelete = async () => {
    await fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
      method: "DELETE",
    });
    navigate("/"); 
  };

  useEffect(() => {
    load();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{blog.title}</h1>
      <div>
        <Link to="/">Back</Link>
        <Link to={`update`} style={{ marginLeft: "10px" }}>
          Edit
        </Link>
        <button onClick={onDelete} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </div>
      <hr />
      <p>{blog.content}</p>
    </div>
  );
}
