import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import firebase from './../firebase';

function License() {

  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false)

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
  }, []);
  
  if (loading) {
    return <h2>Loading...</h2>
  }  

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
            <Col xs={6}>
                <div key={states.id}>
                  <select className="form-select form-select-lg" aria-label="State Select">
                    <option>Select State</option>
                      {states.map((state) => (
                        <option value={state.name}>{state.name}</option>
                        ))}
                  </select>
                </div>
            </Col>
          <Col></Col>
        </Row>
      </Container>
    <Button>Submit</Button>
  </>
  );
}

export default License;