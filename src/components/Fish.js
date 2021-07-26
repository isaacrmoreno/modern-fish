import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import utilStyles from '../styles/utils.module.css'
import { Container, Row, Col } from "react-bootstrap";

function Fish() {
  const [fish, setFishes] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);

  console.log(`selected Fish:`, selectedFish);

  const ref = firebase.firestore().collection("Fish");

  function getFishNames() {
    ref.onSnapshot((querySnapshot) => {
      const fishNameList = [];
      querySnapshot.forEach((doc) => {
        fishNameList.push(doc.data());
      });
      setFishes(fishNameList);
    });
  }

  useEffect(() => {
    getFishNames();
  }, []);

  const handleChange = (e) => {
    let id = e.target.value
    console.log(`HandleChange value:`, e.target.value);
    setSelectedFish(e.target.value);
  };

  function getFishDetails(id) {
    
    handleChange(id);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ul>
              {fish.map((fish, index) => (
                <li className={utilStyles.listItem} onClick={getFishDetails} key={index} value={fish.id}>
                  {fish.name}
                </li>
              ))}
            </ul>

            {/* I need to do the following:
              - be able to click one of these li tags
              - return info for that id. 
              - Based off its id it will retrieve/display x,y,z information from firestore on mainContent component.
              - in the docContent component.
              */}
          </Col>
        </Row>
      </Container>
          {/* <DocContent/> */}
    </>
  );
}

export default Fish;
