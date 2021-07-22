import { LinkContainer } from 'react-router-bootstrap';
import { Card, Container, Nav } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'

function Home() {
  return (
    <>
    <Container className={utilStyles.center}>
      <h1 className={utilStyles.heading3Xl}>
        Modern Fish
      </h1>
      <p className={utilStyles.headingLg}>
        Modern Fish aims to simplify the fishing experience surrounding equipment, setup, and species information to empower the public to get outside and fish!
      </p>
      <Nav className="Center">
          <Card border="primary" body>
            <LinkContainer to="/docs/">
                  <Nav.Link className={utilStyles.headingLg}>Fish Documentation 🎣</Nav.Link>
            </LinkContainer>
          </Card>
      </Nav>
    </Container>
    </>
  )
}

export default Home;