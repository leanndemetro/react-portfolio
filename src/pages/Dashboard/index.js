import React from "react";
import "./style.css"


function Dashboard() {
  return (
    <div className="dashCard">
      <img className="textWrap" src="https://i.imgur.com/wZQSWEt.jpg"></img>
      <p className="alyssaD">Alyssa DeMetro
      <br></br>
      </p>
      <p className="navLinks"> 
      <a className="linksOne" href="/About">ABOUT</a> / 
      <a className="linksTwo" href="/Portfolio"> PORTFOLIO</a> /
      <a className="linksThree" href="/Contact"> CONTACT</a>
      </p>
   </div>
   
  

  );
}


export default Dashboard;