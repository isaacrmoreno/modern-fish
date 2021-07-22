import Fish from './Fish'
import { Container, Row } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function SideBar() {
  return(
    <>
      <Container>
        <Row>
          <h3>Fish - Most Popular</h3>
          <hr/>
          <Fish/>
        {/* <ul>
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

        </ul> */}
        </Row>
      </Container>
    </>
  );
}

export default SideBar;