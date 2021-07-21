import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav } from 'react-bootstrap';

function Home() {
  return (
    <>
    <Container>
    <h1>Modern Fish</h1>
        <Nav className="me-auto"> {/* effects text location  */}
          <LinkContainer to="/docs/">
            <Nav.Link>Fish Documentation 🎣</Nav.Link>
          </LinkContainer>
        </Nav>
    </Container>
    </>
  )
}

export default Home;