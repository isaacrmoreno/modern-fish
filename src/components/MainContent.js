import Fish from "./Fish";

function MainContent() {
  return (
    <>

      <h1>Getting Started</h1>

      <hr/>
      {/* This is where I can put basic gear/technique info before they select a fish species to learn about*/}
        {/* <License/> */}
      <h1>{Fish.name}</h1>
      <hr/>
      <h1>Features:</h1>
      <p>{Fish.features}</p>
      <h1>Habitat:</h1>
      <p>{Fish.habitat}</p>
      <h1>Technique:</h1>
      <p>{Fish.technique}</p>
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

export default MainContent;