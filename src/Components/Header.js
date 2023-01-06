import React from 'react';
import {Navbar, Container} from 'react-bootstrap';


function Header() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.pngitem.com/so/cool-logo/"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Simple Undo App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;