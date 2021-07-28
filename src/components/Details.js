import React from 'react'
import GettingStarted from './GettingStarted'

function Details({fish, selectedFish, onChangeFish}) {
  console.log(`selected fish:`,selectedFish)
  console.log(`fish:`,fish.name) // undefined. 
  // console.log(onChangeFish()) 
  
  return (
    <>
      {selectedFish === null ? <GettingStarted/> :
      <>
        <h2>{selectedFish.name}</h2>
        <h2>{fish.name}</h2>
        <hr/>
        <h2>Features:</h2>
        <p>{selectedFish.features}</p>
        <h2>Habitat:</h2>
        <p>{selectedFish.habitat}</p>
        <h2>Technique:</h2>
        <p>{selectedFish.technique}</p>
      </>
      } 
    </>
  )
}

  export default Details;

    //   <ul>
    //   <li>
    //     <Accordion>
    //       <Accordion.Toggle as={Button} variant="link" eventKey="0">
    //         Trout ↓
    //       </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="0">
    //         <p>Hello! I'm the body</p>
    //       </Accordion.Collapse>
    //     </Accordion>
    //   </li>
    //   <li>
    //     <Accordion>
    //       <Accordion.Toggle as={Button} variant="link" eventKey="1">
    //         Steelhead ↓
    //       </Accordion.Toggle>
    //       <Accordion.Collapse eventKey="1">
    //         <p>Hello! I'm the body</p>
    //       </Accordion.Collapse>
    //     </Accordion>
    //   </li>
    // </ul>
