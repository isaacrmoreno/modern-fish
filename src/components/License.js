import utilStyles from '../styles/utils.module.css'
import { Accordion ,Button, Table } from 'react-bootstrap'

function License() {
  return (
    <>
      <p>Fishing licenses are valid from Jan. 1 to Dec. 31. You can begin buying your next year's license on Dec. 1 of the prior year. If you have questions, please call
        <a className={utilStyles.a} href="https://odfw.huntfishoregon.com/login"> ODFW </a>licensing staff at
        <a className={utilStyles.a} href="tel:503-947-6101"> 503-947-6101.</a>
      </p>
 
    <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        License Type
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Table striped bordered>
          <thead>
            <tr>
              <th>License Type</th>
              <th>Resident</th>
              <th>Non-Resident</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annual Angling License</td>
              <td>$44.00</td>
              <td>$110.50</td>
            </tr>
            <tr>
              <td>Sports Pac</td>
              <td>$196.50</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Combined Angling and Hunting</td>
              <td>$73.00</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Collapse>
    </Accordion>

    <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Endorsements and validations
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Endorsements and validations</th>
              <th>Resident</th>
              <th>Non-Resident</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Two-rod Validation</td>
              <td>$28.00</td>
              <td>$28.00</td>
            </tr>
            <tr>
              <td>Columbia River Basin Endorsement</td>
              <td>$9.75 - $11.75</td>
              <td>$9.75 - $11.75</td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Collapse>
    </Accordion>
    
    <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Youth licenses
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="2">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Youth licenses</th>
              <th>Resident</th>
              <th>Non-Resident</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annual Combination License (12-17 years old)</td>
              <td>$10.00</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Youth Sports Pac</td>
              <td>$55.00</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Youth Tags</td>
              <td>$5.00</td>
              <td>$5.00</td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Collapse>
    </Accordion>
  
    <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Resident Senior and Pioneer Licenses
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="3">
        <Table striped bordered>
        <thead>
          <tr>
            <th>Resident Senior and Pioneer Licenses</th>
            <th>Resident</th>
            <th>Non-Resident</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Senior Angling</td>
            <td>$29.00</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Senior Combination</td>
            <td>$47.50</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Pioneer Combination</td>
            <td>$6.00</td>
            <td>N/A</td>
          </tr>
        </tbody>
        </Table>
      </Accordion.Collapse>
    </Accordion>
  
    <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        Disabled Veteran and Uniformed Service Member licenses
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="4">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Disabled Veteran and Uniformed Service Member licenses</th>
              <th>Resident</th>
              <th>Non-Resident</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Uniformed Services Angling</td>
              <td>N/A</td>
              <td>$44.00</td>
            </tr>
            <tr>
              <td>Disabled Veteran Combination</td>
              <td>FREE</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Collapse>
    </Accordion>
  
    <Accordion>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
        Daily/multi-day licenses, includes Combined Angling Tag
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="5">
        <Table striped bordered>
          <thead>
            <tr>
              <th>Daily/multi-day licenses, includes Combined Angling Tag</th>
              <th>Resident</th>
              <th>Non-Resident</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>One Day Angling</td>
              <td>$23.00</td>
              <td>$23.00</td>
            </tr>
            <tr>
              <td>Two Day Angling</td>
              <td>$42.00</td>
              <td>$42.00</td>
            </tr>
            <tr>
              <td>Three Day Angling</td>
              <td>$59.50</td>
              <td>$59.50</td>
            </tr>
            <tr>
              <td>Seven Day Angling</td>
              <td>N/A</td>
              <td>$93.50</td>
            </tr>
            <tr>
              <td>Daily Angling and Shellfish Combo</td>
              <td>$32.50</td>
              <td>$32.50</td>
            </tr>
            <tr>
              <td>Three-day Shellfish</td>
              <td>N/A</td>
              <td>$19.00</td>
            </tr>
            <tr>
              <td>Columbia River Basin Endorsement (each day)</td>
              <td>$1.00</td>
              <td>$1.00</td>
            </tr>
          </tbody>
        </Table>
      </Accordion.Collapse>
    </Accordion>
    </>
  );
}

export default License;
