import React, { Component } from "react";

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
            <input type="text" placeholder="Get the weekly email"/>
            <input type="submit"/>
          </form>
          <form>
            <input type="text" placeholder="Search title or location"/>
            <input type="submit"/>
          </form>
        </div>
        <div>
          <ul>
            <li>Job 1</li>
            <li>Job 2</li>
            <li>Job 3</li>
          </ul>
          <ul>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
            <li><a href="#">Next ›</a></li>
            <li><a href="#">Last ››</a></li>
          </ul>
        </div>
      </div>
    )
  }
};

export default Home;