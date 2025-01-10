import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-white fixed-top shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Paolo Imbag | Muni Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation; 