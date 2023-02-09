import React from "react";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ReactComponent as Logo } from "../images/logo_unexpected.svg";

const navbarStyle = {
  backgroundColor: "#eeeeee",
};

function Header(props) {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: "100rem", maxHeight: "100" }}></Logo>
      </Container>
    </Navbar>
  );
}

export default Header;
