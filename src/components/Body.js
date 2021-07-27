import SideBar from './SideBar';
import firebase from "../firebase";
import Details from './Details';
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap'

    // https://github.com/erik-t-irgens/color-picker-react < -- this repo has a method that passes information back up

function Body() {

  const ref = firebase.firestore().collection("Fish");

  const [fish, setFishes] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);

  function getFishNames() {
    ref.onSnapshot((querySnapshot) => {
      const fishDetails = [];
      querySnapshot.forEach((doc) => {
        fishDetails.push(doc.data());
      });
      setFishes(fishDetails);
    });
  }

  useEffect(() => {
    getFishNames();
  },[]);

const handleChangeSelectedFish = (id) => {
  console.log(`id:`,id)
  setSelectedFish(id);
};

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