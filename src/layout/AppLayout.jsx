import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
import './AppLayout.style.css';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar expand="lg" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://kreafolk.com/cdn/shop/articles/netflix-logo-design-history-and-evolution-kreafolk_149b6498-ceef-45a6-a671-f45dab16b804.jpg?v=1717725026&width=2048" alt="Netflix" className="netflix-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="navbar-link">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-bar"
                aria-label="Search"
              />
              <Button variant="danger" className="search-btn">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default AppLayout;
