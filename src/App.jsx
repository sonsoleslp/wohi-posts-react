// src/App.js
import React, { useState, useEffect } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import { Container, Spinner, Row, Col, Alert, Navbar,  Nav, Dropdown, DropdownButton, NavbarBrand } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BIN_ID, ACCESS_KEY } from "../config";
import { changeLanguage } from "i18next";
import {useTranslation} from  "react-i18next";
function App() {
  // State with initial posts
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();

  const getData = async () => {
    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        method: 'GET',
        headers: {
          'X-Access-Key': ACCESS_KEY  // Use Access Key instead of Master Key
        }
      });
  
      const json = await res.json();
      setPosts(json.record.posts)
      setLoading(false);
    } catch(e) {
      console.error(e);
      setPosts([])
      setLoading(false);
    }
  }
 useEffect(()=> {getData()}, []);

  const savePosts = async (posts) => {
    try{
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Key': ACCESS_KEY  // Use Access Key
        },
        body: JSON.stringify({ posts: posts })
      });
      if (res.ok) {
        setPosts(posts)// Add new post to the array of posts
      }
    } catch(e) {
      console.error(e);
      setShow(true);
    }
  }
  // Function to add a new post to the state
  const addNewPost = (newPost) => {
    savePosts([newPost,...posts])
  };

  // Function to delete a post by index
  const deletePost = (indexToDelete) => {
    const updatedPosts = posts.filter((post, index) => index !== indexToDelete);
    savePosts(updatedPosts)
  };

    return (<>
      <Navbar expand="lg" bg="warning" >
        <Container fluid>
              <NavbarBrand>{t("My posts")}</NavbarBrand>
              <DropdownButton  variant="warning" title="Language" id="basic-nav-dropdown" onSelect={(val)=>changeLanguage(val)}>
                <Dropdown.Item eventKey="en">English</Dropdown.Item>
                <Dropdown.Item eventKey="es">Español</Dropdown.Item> 
              </DropdownButton> 
        </Container>
      </Navbar> 
      <Container>
        {loading ? 
        <Spinner animation="grow" size="xl" />:<>
          <Row className="mb-3">
            <Col>
              <NewPost addPost={addNewPost} />
            </Col>
          </Row>
          <Row>
            {posts.length == 0 ? <div>{t("Noposts")}</div> : posts.map((post, index) => (
              <Col sm={12} md={6} lg={4}>
              <Post
                key={"p" + index + "_" + post.title}
                title={post.title}
                body={post.body}
                imageUrl={post.imageUrl}
                deletePost={() => deletePost(index)} 
              /></Col>
            ))}
            <Alert variant="danger" onClose={() => setShow(false)} dismissible show={show}>
              <Alert.Heading>{t("Error")}</Alert.Heading>
              <p>
              {t("NotSaved")}
              </p>
            </Alert>
        </Row></>}
      </Container>
    </>);
}

export default App;
