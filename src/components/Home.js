import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

function Home() {
  return (
    <>
    <h1>Modern Fish</h1>

        <Nav className="me-auto"> {/* effects text location  */}
          <LinkContainer to="/docs/">
            <Nav.Link>Fish Documentation 🎣</Nav.Link>
          </LinkContainer>
        </Nav>
    </>
  )
}

export default Home;