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
        // State     // Function

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
  ref.onSnapshot((querySnapshot) => {
    const firestoreFish = [];
    querySnapshot.get({collection: 'Fish', doc: id}).then(
      fish => {
        const firestoreFish ={
          name: fish.get('name')
          habitat: fish.get('')
        }
      }
    )
  }


// viewFishDetails = id => {
//   this.props.firestore.get({collection: 'Fish', doc: id}).then(
//     fish => {
//       const firestoreFish ={
//         name: fish.get('name')
//       }
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