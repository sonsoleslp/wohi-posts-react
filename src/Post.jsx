// src/Post.js
import React from "react";

function Post({ title, body, imageUrl, deletePost }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl} alt={title} />
      <button onClick={deletePost}>Delete</button> {/* Add delete button */}
    </div>
  );
}

export default Post;
