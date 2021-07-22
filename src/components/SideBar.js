import Fish from './Fish'
import { Container, Row } from 'react-bootstrap';

function SideBar() {
  return(
    <>
      <Container>
        <Row>
          <h3>Fish - Most Popular</h3>
          <hr/>
          <Fish/>
        </Row>
      </Container>
    </>
  );
}

export default SideBar;