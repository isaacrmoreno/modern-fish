import React from 'react'
import { Accordion, Button, Container, Row } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function SideBar() {
  return(
    <>
      <Container>
        <Row>
          <p>Fish - Most Popular</p>
        <ul>
          <hr/>
          <li>
            <Accordion>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Trout ↓
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <p>Hello! I'm the body</p>
              </Accordion.Collapse>
            </Accordion>
          </li>
          <li>
            <Accordion>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Steelhead ↓
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <p>Hello! I'm the body</p>
              </Accordion.Collapse>
            </Accordion>
          </li>
          <li>
            <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Salmon ↓
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <p>Hello! I'm the body</p>
                </Accordion.Collapse>
              </Accordion>
          </li>
          <li>
          <Accordion>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Bass ↓
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <p>Hello! I'm the body</p>
                </Accordion.Collapse>
              </Accordion>
          </li>
        </ul>
        </Row>
      </Container>
    </>
  );
}

export default SideBar;