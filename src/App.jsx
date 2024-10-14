import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import {Navbar,  Nav, Dropdown, DropdownButton, NavbarBrand, Container , NavbarToggle} from "react-bootstrap";
import { changeLanguage } from "i18next";
import {useState } from "react";
import {useTranslation} from  "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar expand="lg" bg="warning" >
        <Container fluid>
              <NavbarBrand>{t("My posts")}</NavbarBrand>
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
              <DropdownButton  variant="warning" title="Language" id="basic-nav-dropdown" 
                  onSelect={(val)=>changeLanguage(val)}>
                <Dropdown.Item eventKey="en">English</Dropdown.Item>
                <Dropdown.Item eventKey="es">Español</Dropdown.Item> 
              </DropdownButton> 
        </Container>
      </Navbar> 
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate  to="/posts" replace={true} /> : <Home setAuthenticated={setAuthenticated} />} />
        <Route path="/posts" element={isAuthenticated ?  <Posts isAuthenticated={isAuthenticated} /> : <Navigate  to="/" replace={true} /> } />
      </Routes>
    </Router>
  );
}

export default App;
