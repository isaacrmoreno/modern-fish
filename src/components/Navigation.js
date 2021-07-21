import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import mainLogo from '../img/fish.png';

function Navigation() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={mainLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Modern Fish logo"
            />{' '}
            Modern Fish Oregon
          </Navbar.Brand>      
        </LinkContainer>
        <Nav className="me-auto"> {/* effects text location  */}
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
  </Navbar>

  );
}

export default Navigation;