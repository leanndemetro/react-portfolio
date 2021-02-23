import React, { Component } from "react";
import "./style.css"

class Navbar extends Component {


  render() {
    return (
      <span className="globalNavBar">
      <ul className="navUl">
  <li className="navLi"><a className="NavBarLinks" href="/Contact">Contact</a></li>
  <li className="navLi"><a className="NavBarLinks" href="/Portfolio">Portfolio</a></li>
  <li className="navLi"><a className="NavBarLinks" href="/About">About</a></li>
  <li className="navLi"><a className="NavBarLinks" href="/">Home</a></li>
</ul>
</span>

    );
  }
}

export default Navbar;