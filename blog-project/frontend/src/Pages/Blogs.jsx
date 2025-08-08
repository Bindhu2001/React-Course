import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  
  const load = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/blogs");
    const data = await res.json();
    setBlogs(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2>All Blogs</h2>

      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ol>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ol>
      )}

      <div>
        <Link to="/create">➕ Create New Blog</Link>
      </div>
    </div>
  );
}
