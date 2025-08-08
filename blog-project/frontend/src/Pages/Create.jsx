import { Link, useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();


  const handleCreate = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const content = e.target.content.value;

    await fetch("http://127.0.0.1:8000/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    navigate("/"); 
  };

  return (
    <div className="container">
      <h1>Create Blog</h1>
      <form onSubmit={handleCreate}>
        <div>
          <label htmlFor="title">Title</label><br />
          <input type="text" name="title" required />
        </div>

        <div>
          <label htmlFor="content">Content</label><br />
          <textarea name="content" required></textarea>
        </div>

        <div>
          <Link to="/">Back</Link>
          <input type="submit" value="Create" />
        </div>
      </form>
    </div>
  );
}
