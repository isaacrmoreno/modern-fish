import { Container, Row, Col } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'

function SideBar({fish, onChangeFish}) {
  
  return(
    <>
      <Container className={utilStyles.container}>
        <Row className={utilStyles.scrollBar}>
          <Col>
          <h3 className={utilStyles.headingLg}>Fish Species</h3>
          <hr/>
            <ul>
              {fish.map((fish, index) => (
                <li
                  className={utilStyles.listItem} 
                  onClick={()=> onChangeFish(fish)}
                  key={index}
                  value={fish.id}>
                {fish.name}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SideBar;

    //   <ul>
    //   <li>
    //     <Accordion>
    //       <Accordion.Toggle as={Button} variant="link" eventKey="0">
    //         Trout ↓
    //       </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="0">
    //         <p>Hello! I'm the body</p>
    //       </Accordion.Collapse>
    //     </Accordion>
    //   </li>
    //   <li>
    //     <Accordion>
    //       <Accordion.Toggle as={Button} variant="link" eventKey="1">
    //         Steelhead ↓
    //       </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="1">
    //         <p>Hello! I'm the body</p>
    //       </Accordion.Collapse>
    //     </Accordion>
    //   </li>
    // </ul>