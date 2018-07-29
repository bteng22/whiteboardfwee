import React, { Component } from "react";
import axios from "axios";
import history from 'history';

class CreateAd extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.get('isRemote') == null ? data.set('isRemote', false) : data.set('isRemote', true);

    try {
      await fetch('/api/jobs', {
        method: 'POST',
        body: data
      });
      history.push('/');
    } catch (error) {
      console.log('There was an error saving a job', error);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Step 1: Create Your Ad</h2>
          <label htmlFor="title">Job Title</label>
          <input type="text" id="title" name="title" />
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" />
          <input type="checkbox" id="isRemote" name="isRemote" />
          <label htmlFor="isRemote">Remote, Okay?</label>
          <label htmlFor="url">Job Post URL</label>
          <input type="text" id="url" name="url" />
          <br />
          <label htmlFor="description">Job Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
          />
          <label htmlFor="process">Interview Process</label>
          <textarea
            name="process"
            id="process"
            cols="30"
            rows="10"
          />
          <h2>Step 2: Complete Your Purchase</h2>
          <span>Amount: $299</span>
          <button>Pay With Card</button>
        </form>
      </div>
    );
  }
}

export default CreateAd;
