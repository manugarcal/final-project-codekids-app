import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const CollapseFaq = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Button color="success" onClick={toggle} style={{ marginBottom: '1rem', width: "100%" }}>{title}</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
            {text}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
  
  export default CollapseFaq;

