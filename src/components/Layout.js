import React from 'react'
import { Accordion, Button, Card, Container, Row, Col } from 'react-bootstrap';

function Layout() {
  return(
    <>
      <Container>
        <Row>
          <Col sm={4}>Fish - Most Popular
          
        <ul>
        
          <hr/>
          <li>
          <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
          </li>
          <li>
          {/* <Accordion>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Steelhead
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <p>Hello! I'm the body</p>
            </Accordion.Collapse>
          </Accordion> */}
          </li>
          <li>Salmon</li>
          <li>Bass</li>
          <li></li>
          <li></li>
        </ul>

          
          </Col>
          <Col sm={8}>Where I will put everything else</Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;