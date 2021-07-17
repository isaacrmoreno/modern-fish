import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import firebase from './../firebase';

function License() {

  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false)
  // const [selectedState, setSelectedState] = useState(null)

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
  
  if (loading) {
    return <h2>Loading...</h2>
  }  

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   selectedState = {state.id}
  //   setSelectedState === state.licenseUrl
  // }

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
            <Col xs={6}>
              {/* <form onSubmit={handleSubmit}> */}
                <select className="form-select form-select-lg" aria-label="State Select">
                  <option disable hidden selected>Select State</option>
                    {states.map((state) => (
                  <option value={state.id}>{state.name}</option>
                    ))}
                </select>
                {/* <div className="d-grid gap-2"> */}
                  {states.map((state) => (
                  <Button size="lg" href={state.licenseUrl} target="_black">Submit</Button>
                  ))}
                {/* </div>  */}
                {/* <Button size="lg" type="submit" onClick={() = e => {}} target="_black">Submit</Button> */}
              {/* </form> */}
            </Col>
          <Col></Col>
        </Row>
      </Container>
  </>
  );
}

export default License;