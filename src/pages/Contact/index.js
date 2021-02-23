import React from "react";
import "./style.css"
import { Container, Row, Col, Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";


function Contact() {
  return (
    <Container>
    <Row>
    <Col sm={2}>
       </Col>
      <Col sm={8}>
   <span className="TITLE">
    Contact.
     </span>
    </Col>
    <Col sm={2}>
       </Col>
   </Row>
   <Row>
   <Col sm={2}>
       </Col>
     <Col sm={8}>
       <div className="contactCardLeft">
       <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label className="formHeaders">Name</Form.Label>
    <Form.Control type="text" placeholder="John Smith" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2">
    <Form.Label className="formHeaders">Email Address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className="formHeaders">Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
<input className="formBtn" type="button" value="Send"></input><i class="fas fa-arrow-right"></i>

       </div>
     </Col>
     <Col sm={2}>
       </Col>
   </Row>
   <Row>
   <br></br>
   <br></br></Row>
   </Container>
  
   
  

  );
}


export default Contact;