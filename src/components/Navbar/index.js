import React, { Component } from "react";
import "./style.css"

class Navbar extends Component {


  render() {
    return (
      <span className="globalNavBar">
      <ul>
  <li><a className="NavBarLinks" href="/About">ABOUT</a></li>
  <li><a className="NavBarLinks" href="/Portfolio">PORTFOLIO / </a></li>
  <li><a className="NavBarLinks" href="/Contact">CONTACT / </a></li>
  <li><a className="NavBarLinks" href="/"> HOME / </a></li>
</ul>
</span>

    );
  }
}

export default Navbar;