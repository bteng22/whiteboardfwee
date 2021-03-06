import React, { Component } from "react";
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import JobIndex from "components/JobIndex";
import Link from "components/Link";

class HomePage extends Component {
  render() {
    return [
      <Nav key="nav"/>,
      <div key="home">
        <div className="jumbotron">
          <h1>Find your next developer job</h1>
          <h2>No whiteboards. No games. No riddles.</h2>
          <Link href="/job">Post a job - $299/month</Link>
        </div>
        <div>
          <form>
            <input type="text" placeholder="Get the weekly email" />
            <input type="submit" />
          </form>
          <form>
            <input type="text" placeholder="Search title or location" />
            <input type="submit" />
          </form>
        </div>
        <JobIndex />
      </div>,
      <Footer key="footer"/>
    ];
  }
}

export default HomePage;
