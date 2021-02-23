import React, { Component } from "react";
import "./style.css"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
            <AiFillGithub /> <AiFillLinkedin />
          </footer>
        );
    }
}

export default Footer;