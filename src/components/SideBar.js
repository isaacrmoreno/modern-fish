import { Container, Row, Col } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'

function SideBar({fish, onChangeFish, onResetFishState}) {
  
  return(
    <>
      <Container className={utilStyles.container}>
        <Row className={utilStyles.scrollBar}>
          <Col>
          <h3 className={utilStyles.headingLg}>Fish Species</h3>
          <hr/>
          <div className={utilStyles.listItem} onClick={onResetFishState}>License Information</div>
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
