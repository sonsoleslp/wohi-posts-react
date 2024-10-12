// src/NewPost.js
import React, { useState } from "react";
import { FormControl, FormLabel, Card, Button, Form, CardBody, CardHeader} from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function NewPost({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { t, i18n } = useTranslation();
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
    <Card className="new-post mt-3">
      <CardHeader>Create a New Post</CardHeader>
      <CardBody>
      <Form onSubmit={handleSubmit} className="mb-2">
        <div>
          <FormLabel htmlFor="title">{t("Title")}:</FormLabel>
          <FormControl
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="body">{t("Body")}:</FormLabel>
          <FormControl
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="imageUrl">{t("Img")}:</FormLabel>
          <FormControl
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <Button type="submit">{t("Create")}</Button>
        </div>
       
      </Form> </CardBody>
    </Card>
  );
}

export default NewPost;
