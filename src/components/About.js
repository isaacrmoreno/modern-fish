import { Container } from 'react-bootstrap'
import utilStyles from '../styles/utils.module.css'

function About() {
  
  return(
    <>
      <Container>
        <p className={utilStyles.headingLg}>Modern Fish Oregon aims to simplify the fishing experience surrounding equipment, setup, and species information to empower the public to get outside and fish! 🎣</p>
      </Container>
    </>
  );
}

export default About;