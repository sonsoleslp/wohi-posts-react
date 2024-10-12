// src/Post.js
import React from "react";
import { Card, CardBody, CardHeader, CardImg, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Post({ title, body, imageUrl, deletePost }) {
  const { t, i18n } = useTranslation();
  return (
    <Card >
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardImg src={imageUrl} alt={title} />
        <p>{body}</p>
        <Button onClick={deletePost}>{t("Delete")}</Button> {/* Add delete button */}
      </CardBody>
      
    </Card>
  );
}

export default Post;
