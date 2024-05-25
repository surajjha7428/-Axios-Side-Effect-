import "../App.css";

function Post({ title, body, imageUrl }) {
  return (
    <div className="post">
      <img src={imageUrl} alt={`${title} ${body}`} className="post-image" />
      <div className="post-content">
        <p className="post-title">Title: {title}</p>
        <p className="post-body">Body: {body}</p>
      </div>
    </div>
  );
}

export default Post;
