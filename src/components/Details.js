
function Details(props) {
  
        // props.handleChangeSelectedFish()
      
  return (

    <>
      <h1>Getting Started</h1>

      <hr />
      {/* This is where I can put basic gear/technique info before they select a fish species to learn about*/}
      {/* <License/> */}
      
      <h2>{props.fish.name}</h2>
      <hr/>
      <h2>Features:</h2>
      <p>{props.features}</p>
      <h2>Habitat:</h2>
      <p>{props.habitat}</p>
      <h2>Technique:</h2>
      <p>{props.technique}</p>
    </>

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
  );
}

export default Details;
