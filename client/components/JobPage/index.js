import React, { Component } from "react";
import Nav from "components/Nav";
import CreateAd from "components/CreateAd";
import Footer from "components/Footer";

class JobPage extends Component {
  render() {
    return [
      <Nav key="nav" />,
      <CreateAd key="create-ad" />,
      <Footer key="footer" />
    ];
  }
}

export default JobPage;
