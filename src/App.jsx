// src/App.js
import React, { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import "./App.css";
function App() {
  // State with initial posts
  const [posts, setPosts] = useState([
    {
      "title": "Discover France",
      "body": "Paris, the city of lights",
      "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDkzNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjY1MTI4MzQw&ixlib=rb-1.2.1&q=80&w=1080"
    },
    {
      "title": "The Magic of Japan",
      "body": "Tokyo at night",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1666700698920-d2d2bba589f8?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "A Trip to Morocco",
      "body": "Exploring Casablanca",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1697730023504-560a4aab9d95?q=80&w=2930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "The Wonders of Egypt",
      "body": "The Great Pyramids of Giza",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "title": "Norway's Fjords",
      "body": "Breathtaking landscapes",
      "imageUrl": "https://images.unsplash.com/photo-1473160330398-3aa3dbdf3117?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);

  // Function to add a new post to the state
  const addNewPost = (newPost) => {
    setPosts([newPost,...posts]); // Add new post to the array of posts
  };

  // Function to delete a post by index
  const deletePost = (indexToDelete) => {
    const updatedPosts = posts.filter((post, index) => index !== indexToDelete);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <NewPost addPost={addNewPost} />
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          body={post.body}
          imageUrl={post.imageUrl}
          deletePost={() => deletePost(index)} // Pass the delete function
        />
      ))}
    </div>
  );
}

export default App;
