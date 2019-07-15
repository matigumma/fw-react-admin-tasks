import React, { Component } from 'react';
import logo from "../logo.svg";

class Nav extends Component{
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="/" >
                    <img src={logo} width="30" height="30" className="App-logo d-inline-block align-top" alt=""/>
                        {this.props.title}
                </a>
                <span className="badge basge-pill badge-primary">{this.props.tasks_number} Tasks</span>
            </nav>
        );
    }
}
export default Nav;