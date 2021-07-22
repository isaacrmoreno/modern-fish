import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import firebase from './../firebase';

function Fish() {

  const [fish, setFishes] = useState([]);
  const [loading, setLoading] = useState(false)
  const [selectedFish, setSelectedFish] = useState(null)

  console.log(`selected Fish:`, selectedFish)

  const ref = firebase.firestore().collection('Fish');

  function getfishs() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const fishDetails=[];
      querySnapshot.forEach((doc) => {
        fishDetails.push(doc.data());
      })
      setFishes(fishDetails);
      setLoading(false);
    })
  }

  useEffect(() => {
    getfishs();
  },[]);
  
  const handleSubmit = e => {
    e.preventDefault();
    handleChange()    
    return 
  } 
    
  const handleChange = e => {

    const { value, name } = e.target
    const selectedFishUrl = { ...selectedFish }
    selectedFishUrl[name] = value
    console.log(value)
    setSelectedFish(selectedFishUrl)
  }

  if (loading) {
    return <h2>Loading...</h2>
  }  

  return (
    <>
      <Container>
        <Row>
            <Col xs={6}>

              <ul>
              {fish.map((fish, index) => (

                <li key={index} value={fish.licenseUrl}><a href="">{fish.name}</a></li>
                  ))}
              </ul>
              
            </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
  </>
  );
}

export default Fish;