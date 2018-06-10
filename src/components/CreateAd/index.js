import React, { Component } from "react";

class CreateAd extends Component {
  render() {
    return (
      <div>
        <section>Instructions here</section>
        <form action="">
          <h2>Step 1: Create Your Ad</h2>
          <label htmlFor="job-ad-title">Job Title</label>
          <input type="text" id="job-ad-title" />
          <label htmlFor="job-ad-company">Company Name</label>
          <input type="text" id="job-ad-company" />
          <label htmlFor="job-ad-city">City</label>
          <input type="text" id="job-ad-city" />
          <label htmlFor="job-ad-state">State</label>
          <input type="text" id="job-ad-state" />
          <input type="checkbox" id="job-ad-remote" />
          <label htmlFor="job-ad-remote">Remote, Okay?</label>
          <label htmlFor="job-ad-url">Job Post URL</label>
          <input type="text" id="job-ad-url" />
          <br />
          <label htmlFor="job-ad-description">Job Description</label>
          <textarea
            name="job-ad-description"
            id="job-ad-description"
            cols="30"
            rows="10"
          />
          <label htmlFor="job-ad-process">Interview Process</label>
          <textarea
            name="job-ad-process"
            id="job-ad-process"
            cols="30"
            rows="10"
          />
          <h2>Step 2: Complete Your Purchase</h2>
          <span>Amount: $299</span>
          <input type="submit" value="Pay with Card" />
        </form>
      </div>
    );
  }
}

export default CreateAd;
