import React, { Component } from "react";
import JobIndex from "components/JobIndex";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Find your next developer job</h1>
          <h2>No whiteboards. No games. No riddles.</h2>
          <a href="#">Post a job - $299/month</a>
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
      </div>
    );
  }
}

export default Home;
