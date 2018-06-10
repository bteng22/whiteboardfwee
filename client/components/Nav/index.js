import React, { Component } from "react";
import Link from "components/Link";
import { StyledNav, StyledNavList, Hamburger } from "./styles";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    };
  }
  toggleNav() {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }
  render() {
    return (
      <StyledNav isCollapsed={this.state.isCollapsed}>
        <a href="#">Logo</a>
        <Hamburger onClick={this.toggleNav.bind(this)}>
          <img src="menu.svg" />
        </Hamburger>
        <StyledNavList isCollapsed={this.state.isCollapsed}>
          <li>
            <Link href="/job">Post a job</Link>
          </li>
          <li>Subcribe to Newsletter</li>
          <li>Twitter</li>
        </StyledNavList>
      </StyledNav>
    );
  }
}

export default Nav;
