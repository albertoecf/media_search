import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const navbarStyle = {
  backgroundColor: "lightblue",
};

function Header(props) {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/"> {props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
