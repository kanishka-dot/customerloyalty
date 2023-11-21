import React, { useState } from 'react';
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem, Alert, Button } from 'reactstrap';
import Customer from '../components/customer/Customer';
import Loyalty from '../components/loyalty/Loyalty';
function Home(props) {

    const [alert, setAlert] = useState({
        open: false,
        text: "",
        type: ""
      });

    const onDismiss = () => setAlert({
        open: false,
        text: "",
        type: ""
      });
    
      const shorAlert = (type, message) => setAlert({
        open: true,
        text: message,
        type: type
      });
    


    return (
        <div>
    <Alert color={alert.type} isOpen={alert.open} toggle={onDismiss}>
      {alert.text}
    </Alert>
    <UncontrolledAccordion defaultOpen={[
      '1',
      '2'
    ]}
      stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1">Customer Details</AccordionHeader>
        <AccordionBody accordionId="1">
          <Customer />
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">Customer Loyalty</AccordionHeader>
        <AccordionBody accordionId="2">
        <Loyalty />
        </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  </div>
    );
}

export default Home;