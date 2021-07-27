import SideBar from './SideBar';
import firebase from "../firebase";
import Details from './Details';
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap'

    // https://github.com/erik-t-irgens/color-picker-react < -- this repo has a method that passes information back up

function Body() {

  let db = firebase.firestore();

  db.collection("fish").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`Firestore info:${doc.id} => ${doc.data()}`);
    });
});

  const ref = firebase.firestore().collection("Fish");

  const [fish, setFishes] = useState([]);
  const [selectedFish, setSelectedFish] = useState([]);
  

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

  const handleChangeSelectedFish = (id) => {
    console.log(`id:`,id)
    setSelectedFish(id)
  }

  // this.props.firestore.get({collection: 'Fish', doc: id}).then(


// const viewFishDetails = id => {
//   firebase.firestore.get({collection: 'Fish', doc: id}).then(
//     fish => {
//       const firestoreFish ={
//         name: fish.get('name'),
//         features: fish.get('features'),
//         habitat: fish.get('habitat'),
//         technique: fish.get('technique')
//       }
//       setSelectedFish(firestoreFish)
//     }
//   )
// }

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