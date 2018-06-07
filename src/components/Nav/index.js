import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="#">Logo</a>
        <ul>
          <li>Post a job</li>
          <li>Subcribe to Newsletter</li>
          <li>Twitter</li>
        </ul>
      </nav>
    )
  }
};

export default Nav;