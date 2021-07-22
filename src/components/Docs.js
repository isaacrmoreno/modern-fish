import SideBar from './SideBar';
import MainContent from './MainContent';
import { Container, Col, Row } from 'react-bootstrap'

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