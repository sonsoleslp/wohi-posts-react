// src/NewPost.js
import React, { useState } from "react";

function NewPost({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submit

    // Create a new post object
    const newPost = {
      title,
      body,
      imageUrl
    };

    // Add the new post to the App state
    addPost(newPost);

    // Clear the input fields after submission
    setTitle("");
    setBody("");
    setImageUrl("");
  };

  return (
    <div className="new-post">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewPost;
