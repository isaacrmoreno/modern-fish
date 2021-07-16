import { Container, Row, Col } from 'react-bootstrap';

function License() {
  return (
    <>
    <Container>
      <Row>
        <Col></Col>
          <Col xs={6}>
            <select class="form-select form-select-lg" aria-label="Default select example">
              <option selected>Select State</option>
              <option value="1">One</option>
            </select>
          </Col>
        <Col></Col>
      </Row>
    </Container>
  </>
  );
}

export default License;