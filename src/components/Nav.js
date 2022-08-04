import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {
  state = {
    button: ''
  }

  handleClick= (e) => {
    this.props.onClick(e.target.textContent.toLowerCase());

    this.setState({
      button: e.target.textContent.toLowerCase()
    });
  
  }

  render () {
    return (
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/dog" onClick={this.handleClick}>dog</NavLink>
          </li>
          <li>
            <NavLink to="/rabbit" onClick={this.handleClick}>rabbit</NavLink>
          </li>
          <li>
            <NavLink to="/koala" onClick={this.handleClick}>koala</NavLink>
          </li>
        </ul>
      </nav>
    );

  }
  
};

export default withRouter(Nav);