import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        {/* <Navbar.Brand to="/">Modern Fish</Navbar.Brand>
        <Nav className="me-auto">  effects text location 
          <Nav.Link to="/about">About</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link> */}

          <Link to="/">Modern Fish</Link>
          <Nav className="me-auto">
          <Link to="/about">About</Link>
          <Link href="#faq">FAQ</Link>
          {/* Guess ill be messing up the bootstrap styling to make this basic nav menu work for now. Removed */}
        </Nav>
      </Container>
  </Navbar>


  );
}

export default Header;