import SideBar from './SideBar';
import firebase from "../firebase";
import 'firebase/firestore';
import Details from './Details';
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
    console.log(`fish:`,fish)
    setSelectedFish(fish)
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={4}>
            <SideBar fish={fish} onChangeFish={handleChangeSelectedFish}/>
          </Col>
          <Col sm={8}>
            <Details fish={fish} selectedFish={selectedFish} onChangeFish={handleChangeSelectedFish}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Body;