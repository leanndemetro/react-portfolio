import React from "react";
import "./style.css"
import { Container, Row, Col, Card } from "react-bootstrap";


function Contact() {
  return (
    <Container>
    <Row>
      <Col>
   <span className="TITLE">
    Contact.
     </span>
    </Col>
   </Row>
   <Row>
     <Col sm={6}>
       <div className="contactCardLeft">hi</div>
     </Col>
     <Col sm={6}>
    <div className="contactCardRight">hi</div>
       </Col>
   </Row>
   </Container>
  

  );
}


export default Contact;