import { Container, Row, Col } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'

function SideBar({fish, onChangeFish}) {
  
  return(
    <>
      <Container className={utilStyles.container}>
        <Row className={utilStyles.scrollBar}>
          <Col>
          <h3>Fish Species</h3>
          <hr/>
            <ul>
              {fish.map((fish, index) => (
                <li
                  className={utilStyles.listItem} 
                  onClick={()=> onChangeFish(fish.id)}
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
