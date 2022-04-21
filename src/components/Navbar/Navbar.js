import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";

export default function Navigationbar() {
  function logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem("token");
    window.location.reload(false);
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Museum Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Insert">Insert ✔️</Nav.Link>
            <Nav.Link href="/Modify">Modify ✏️ </Nav.Link>
            {/* <Nav.Link href="/Delete">Delete ❌</Nav.Link> */}
            <Nav.Link href="/Report">Report 📁</Nav.Link>
            <Nav.Link href="/Search">Search 🔍</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="danger" onClick={logout}>
              Logout
            </Button>
            {/* <Nav.Link href="/About">About 👤</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
