import firebase from '../firebase';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Fish() {

  const [fish, setFishes] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null);
  
document.addEventListener("DomContentLoader", event => {

  // const app = firebase.app();
  const db = firebase.firestore();  
  const ref = db.collection('Fish');

  ref.get()
      .then(doc => {
        const data  = doc.data();
        document.write(data.habitat + `<br>`)
        document.write(data.technique)
      })

})





//     const handleSelectFish = (id) => {
//     ref.get({ collection: 'Fish', doc: id })
//       .then((fish) => {
//     const firestoreFish = {
//       name: fish.get('name'),
//       features: fish.get('features'),
//       habitat: fish.get('habitat'),
//       technique: fish.get('technique'),
//       id: fish.id
//     }
//     setSelectedFish(firestoreFish);
//   })
// }

  console.log(`selected Fish:`, selectedFish)

  function getFishDetails() {
    ref.onSnapshot((querySnapshot) => {
      const fishDetails = [];
      querySnapshot.forEach((doc) => {
        fishDetails.push(doc.data());
      })
      setFishes(fishDetails);
    })
  }

  useEffect(() => {
    getFishDetails();
  },[]);

  // const handleSelectFish = (id) => {
  //   this.props.firestore.get({ collection: 'Fish', doc: id }).then((fish) => {
  //     const firestoreFish = {
  //       name: fish.get('name'),
  //       features: fish.get('features'),
  //       habitat: fish.get('habitat'),
  //       technique: fish.get('technique'),
  //       id: fish.id
  //     }
  //     setSelectedFish(firestoreFish);
  //   })
  // }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   handleChange()    
  //   return 
  // } 
    
  const handleChange = e => {
    const { value, name } = e.target
    const selectedFishDetails = { ...selectedFish }
    selectedFishDetails[name] = value
    console.log(`value:`,value)
    setSelectedFish(selectedFishDetails)
  }

  return (
    <>
      <Container>
        <Row>
            <Col>
              <ul>
              {fish.map((fish, index) => (
                <li onClick={handleChange} key={index} value={fish.id}>
                  <a href="/docs/:id">
                    {fish.name}
                  </a>
                </li>
                ))}
              </ul> 

              {/* I need to do the following:
              - be able to click one of these li tags
              - have each have an id associated with it
              - Based off its id it will retrieve/display x,y,z information from firestore on mainContent component.
              */}

              {/* dynamic routing based of the fish id. */}
              

            </Col>
        </Row>
      </Container>
  </>
  );
}

export default Fish;