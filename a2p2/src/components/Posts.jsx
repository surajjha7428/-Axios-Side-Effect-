import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";
import "../App.css";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setPosts(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div className="posts-container">
      <h1>List of Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.first_name}
            body={post.last_name}
            imageUrl={post.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;
