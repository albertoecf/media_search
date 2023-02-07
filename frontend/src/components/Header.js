import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">Not My Order</Navbar.Brand>
    </Navbar>
  );
}

export default Header;
