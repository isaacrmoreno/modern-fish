import SideBar from './SideBar';
import firebase from "../firebase";
import Details from './Details';
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap'

    // You need to then pass down this information as props to both SideBar and DocContent

    // - Also create a method HERE that changes the currently selected fish and pass that down as a prop to SideBar and then Fish so when you click on Fish it calls that method.
    
    // You can also make that method take any parameter that you want and pass it in when you click it  (you're mapping over a list of fish that have properies, and you can pass any of those or ALL of those properties back up through that method if you want, and use that to set state)
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