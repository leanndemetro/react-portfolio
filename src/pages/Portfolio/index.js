import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";


function Portfolio() {
  return (
    <Container>
    <Row>
    <Col sm={2}>
       </Col>
      <Col sm={8}>
   <span className="TITLE">
    Portfolio.
     </span>
    </Col>
    <Col sm={2}>
       </Col>
   </Row>
   <Row>
     <Col>
     <hr></hr></Col>
   </Row>
   <Row>
     <Col sm={6}>
       <div className="portCardLeft">
         <a target="_blank" className="certImg" href="https://murmuring-meadow-11462.herokuapp.com/"><img alt="budgetTracker" className="portImg" src="https://i.imgur.com/YxrUmX9.jpg"></img></a> </div>
     </Col>
     <Col sm={6}>
     <div className="portCardLeft">
     <a target="_blank" className="certImg" href="https://safe-brook-64265.herokuapp.com/"><img alt="workoutTracker" className="portImgTwo" src="https://i.imgur.com/py6Xoo5.jpg"></img></a>
      </div>
       </Col>
   </Row>
   <Row>
     <Col sm={6}>
       <div className="portCardLeft">
       <a target="_blank" className="certImg" href="https://shrouded-stream-06971.herokuapp.com/"><img alt="eatDaBurger" className="portImgThree" src="https://i.imgur.com/m3SnOYK.jpg"></img></a> </div>
     </Col>
     <Col sm={6}>
       </Col>
   </Row>
   <Row>
   <br></br></Row>
   <hr></hr>
   <br></br>
   </Container>

  );
}


export default Portfolio;