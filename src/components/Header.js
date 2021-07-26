import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import mainLogo from '../img/fish.png';
import gitHubLogo from '../img/github.png'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

function Header() {
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
            Modern Fish
          </Navbar.Brand>      
        </LinkContainer>
        <Nav className="me-auto"> {/* effects text location  */}
          <LinkContainer to="/docs">
            <Nav.Link>Docs</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav>
          <a href="https://github.com/isaacrmoreno/modern-fish">
          <img
            src={gitHubLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GitHub logo"
            />
          </a>
        </Nav>
      </Container>
  </Navbar>

  );
}

export default Header;