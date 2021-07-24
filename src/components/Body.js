import SideBar from './SideBar';
import DocContent from './DocContent';
import { Container, Col, Row } from 'react-bootstrap'

function Body() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <SideBar/>
          </Col>
          <Col sm={8}>
            <DocContent/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;