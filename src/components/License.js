import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import firebase from './../firebase';

function License() {

  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false)
  const [selectedState, setSelectedState] = useState(null)

  const ref = firebase.firestore().collection('states');

  function getStates() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const stateInfo=[];
      querySnapshot.forEach((doc) => {
        stateInfo.push(doc.data());
      })
      setStates(stateInfo);
      setLoading(false);
    })
  }

  useEffect(() => {
    getStates();
  },[]);
  
  const handleSubmit = e => {
    e.preventDefault();
    return 
  } 

  // find more examples of handleSubmit. 
  // im close. 
    
  const handleChange = e => {
    const { value, name } = e.target
    const selectedStateUrl = { ...selectedState }
    selectedStateUrl[name] = value
    console.log(value)
    setSelectedState(selectedStateUrl)
  }

  if (loading) {
    return <h2>Loading...</h2>
  }  

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
            <Col xs={6}>
              <form onSubmit={handleSubmit}>
                <select onChange={handleChange} defaultValue={null} className="form-select form-select-lg" aria-label="State Select">
                  <option value={null} disable="true" hidden>Select State</option>
                    {states.map((state, index) => (
                  <option key={index} value={state.licenseUrl}>{state.name}</option>
                    ))}
                </select>
                  <Button type="submit">Submit</Button>
              </form>
            </Col>
          <Col></Col>
        </Row>
      </Container>
  </>
  );
}

export default License;