import { Container, Row, Col } from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'
import PropTypes from "prop-types";


function SideBar(props) {
  
  return(
    <>
      <Container className={utilStyles.container}>
        <Row className={utilStyles.scrollBar}>
          <Col>
          <h3>Fish Species</h3>
          <hr/>
            <ul>
              {props.fish.map((fish, index) => (
                <li className={utilStyles.listItem} onClick={()=> props.onChangeFish(fish.id)} key={index} value={fish.id}>
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

  SideBar.propTypes = {
    handleChangeSelectedFish: PropTypes.func
  }

export default SideBar;
