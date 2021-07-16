import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Modern Fish</Navbar.Brand>
    <Nav className="me-auto"> {/* effects text location */}
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Header;