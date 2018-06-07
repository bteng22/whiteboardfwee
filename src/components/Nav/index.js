import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        Some Nav
        { this.props.children }
      </nav>
    )
  }
};

export default Nav;