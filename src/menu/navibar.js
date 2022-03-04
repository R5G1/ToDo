import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const logo = require('../../src/img/logo192.png');
export default function Navibar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/Home">Home</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/todo">ToDo</Link>
          </Nav>
        </Container>
        <Nav className="me-auto">
          <img className="me-img" src={logo} alt="" />
        </Nav>
      </Navbar>
    </>
  );
}
