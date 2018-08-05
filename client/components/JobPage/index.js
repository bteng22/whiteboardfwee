import React, { Component } from "react";
import { Elements } from 'react-stripe-elements';
import Nav from "components/Nav";
import CreateAd from "components/CreateAd";
import Footer from "components/Footer";

class JobPage extends Component {
  render() {
    return [
      <Nav key="nav" />,
      <Elements>
        <CreateAd key="create-ad" />
      </Elements>,
      <Footer key="footer" />
    ];
  }
}

export default JobPage;
