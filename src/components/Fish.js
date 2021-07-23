import firebase from './../firebase';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Fish() {

  const [fish, setFishes] = useState([]);
  const [selectedFish, setSelectedFish] = useState(null)

  console.log(`selected Fish:`, selectedFish)

  const ref = firebase.firestore().collection('Fish');

  // let query = ref.where('fish', '==', 'id')

  // function getFishDetails() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const fishDetails = [];
  //     querySnapshot.forEach((doc) => {
  //       fishDetails.push(doc.data());
  //     })
  //     setSelectedFish(fishDetails);
  //   })
  // }

  // useEffect(() => {
  //   getFishDetails();
  // },[]);

  function getFishes() {
    ref.onSnapshot((querySnapshot) => {
      const fishNames=[];
      querySnapshot.forEach((doc) => {
        fishNames.push(doc.data());
      })
      setFishes(fishNames);
    })
  }

  useEffect(() => {
    getFishes();
  },[]);


  
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   handleChange()    
  //   return 
  // } 
    
  const handleChange = e => {

    console.log(`e:`,e)
    console.log(`e.target:`,e.target)
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
                <li onClick={handleChange} key={index} value={fish.id}><a href="/docs/:id">{fish.name}</a></li>
                  ))}
              </ul> 

                {/* fish[id]habitat */}

                {/* <p>{query}</p> */}
                {/* look into express! Look into more routing stuff. */} 

              {/* I need to do the following:
              - be able to click one of these li tags
              - have each have an id associated with it
              - Based off its id it will retrieve/display x,y,z information from firestore on mainContent component.
              */}

              {/* dynamic routing based of the fish id. 
              
              */}
              

            </Col>
        </Row>
      </Container>
  </>
  );
}

export default Fish;