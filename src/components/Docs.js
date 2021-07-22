import { Container, Col, Row } from 'react-bootstrap'
import Gear from './Gear';
import GearSetUp from './GearSetUp';
import Habitat from './Habitat';
import SideBar from './SideBar';
import Technique from './Technique';

function Docs() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={4} className="left-col">
            <SideBar/>
          </Col>
          <Col sm={8} className="center-col">
            <Habitat/>
            <Technique/>
            <Gear/>
            <GearSetUp/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Docs;