import React, { Component } from "react";
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {
  state = {
    button: ''
  }

  handleClick= (e) => {

    
    
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
            <NavLink to="/ocean" onClick={this.handleClick}>ocean</NavLink>
          </li>
          <li>
            <NavLink to="/mountain" onClick={this.handleClick}>mountain</NavLink>
          </li>
        </ul>
      </nav>
    );

  }
  
};

export default withRouter(Nav);