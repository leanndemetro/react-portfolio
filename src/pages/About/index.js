import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";




function About() {
  return (
   <Container>
   <Row>
     <Col sm={2}>
  <span className="TITLE">
   About.
    </span>
   </Col>
   <Col sm={8}>
      </Col>
  </Row>
  <hr></hr>
  <Row>
  <Col sm={4}>
  <div className="aboutCardLeft">
    <br></br>
        <img className="meImg" src="https://i.imgur.com/dry8RG7.jpg"></img>
        <h5 className="aboutText">My name is Alyssa DeMetro - I'm an Orlando Native, and a graduate of the University Of Central Florida Full-Stack Coding Bootcamp.</h5>
      </div>
      </Col>
    <Col sm={8}>
      <div className="aboutCardLeft">
        <a target="_blank" href="https://api.badgr.io/public/assertions/tDt35IJZQT-VVtAvMjxGfA?identity__email=leanndemetro%40gmail.com"><img className="certImg" src="https://i.imgur.com/ZEsoyI7.jpg"></img></a>
      </div>
    </Col>
  </Row>
  <Row>
  <br></br></Row>
  <hr></hr>
  <br></br>
  </Container>
 
     
  
   
  );
}


export default About;