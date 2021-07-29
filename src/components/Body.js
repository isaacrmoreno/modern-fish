import SideBar from './SideBar';
import Details from './Details';
import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap'

function Body() {

  const ref = firebase.firestore().collection("Fish");

  const [fish, setFishes] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);
  

  function getFishNames() {
    ref.onSnapshot((querySnapshot) => {
      const fishNames = [];
      querySnapshot.forEach((doc) => {
        fishNames.push(doc.data());
      });
      setFishes(fishNames);
    });
  }

  useEffect(() => {
    getFishNames();
  },[]);

  const handleChangeSelectedFish = (fish) => {
    setSelectedFish(fish)
  }

  const handleResetFishState = () => {
    setSelectedFish(null)
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <SideBar 
            fish={fish} 
            onChangeFish={handleChangeSelectedFish} 
            onResetFishState={handleResetFishState}/>
          </Col>
          <Col sm={8}>
            <Details selectedFish={selectedFish}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;