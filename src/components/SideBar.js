import Fish from './Fish'
import { Container, Row } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'

function SideBar() {
  return(
    <>
      <Container className={utilStyles.container}>
        <Row className={utilStyles.scrollBar}>
          <h3>Fish Species</h3>
          <hr/>
          <Fish/>
        </Row>
      </Container>
    </>
  );
}

export default SideBar;