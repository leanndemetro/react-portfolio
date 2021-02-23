import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import { RiComputerLine } from "react-icons/ri"

function Dashboard() {
  return (
   <Container>
    <Row>
      <Col>
   <span className="TITLE">
    Alyssa Leann DeMetro.
     </span>
     <h3 className="sideText"> <RiComputerLine /> MERN Stack Web Developer </h3>
     </Col>
   </Row>
   </Container>

   
  

  );
}


export default Dashboard;