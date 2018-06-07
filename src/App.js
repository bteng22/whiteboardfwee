import React, { Component } from "react";
import Nav from 'components/Nav';
import Home from 'components/Home';
import Footer from 'components/Footer';

class App extends Component{
  render(){
    return [
      <Nav key="nav"/>,
      <Home key="home"/>,
      <Footer key="footer"/>
    ];
  }
}

export default App;