import { LinkContainer } from 'react-router-bootstrap';
import { Card, Container, Nav } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'

function Home() {
  return (
    <>
    <Container>
    <h1 className={utilStyles.heading2Xl}>Modern Fish</h1>
        <Nav className="me-auto">
            <Card border="primary" body>
              <LinkContainer to="/docs/">
                    <Nav.Link className={utilStyles.headingXl}>Fish Documentation 🎣</Nav.Link>
              </LinkContainer>
            </Card>
        </Nav>
    </Container>
    </>
  )
}

export default Home;