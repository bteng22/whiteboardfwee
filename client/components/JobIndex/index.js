import React, { Component } from "react";
import axios from "axios";

class JobIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get("/api/jobs");
      this.setState({ jobs: data });
    } catch (err) {
      console.log("Error fetching jobs", err);
    }
  }

  renderJob(job) {
    console.log('+++job', job);
    const { _id, title, company, city, state, description } = job;

    return (
      <li key={_id}>
        <a href="#">{title}</a>
        <span>
          {company} - {city}, {state}
        </span>
        <p>{description}</p>
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul>{this.state.jobs.map(this.renderJob)}</ul>
      </div>
    );
  }
}

export default JobIndex;
