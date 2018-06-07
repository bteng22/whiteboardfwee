import React, { Component } from "react";
import Link from "components/Link";

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="#">Logo</a>
        <ul>
          <li>
            <Link href="/post">Post a job</Link>
          </li>
          <li>Subcribe to Newsletter</li>
          <li>Twitter</li>
        </ul>
      </nav>
    )
  }
};

export default Nav;