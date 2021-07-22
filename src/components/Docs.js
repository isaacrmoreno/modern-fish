import { Container, Col, Row } from 'react-bootstrap'
import MainContent from './MainContent';
import SideBar from './SideBar';

function Docs() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <SideBar/>
          </Col>
          <Col sm={8}>
            <MainContent/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Docs;