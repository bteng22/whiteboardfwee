import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    axios({
      url: '/api/signup/referer',
      method: 'POST',
      data,
    });
  }

  render() {
    return (
      <div>
        <div>Already have an account? Sign in to your account</div>
        <button>Continue with LinkedIn</button>
        <button>Continue with Github</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" />
          <label htmlFor="emailAddress">Email address</label>
          <input type="email" id="emailAddress" name="emailAddress" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="passwordConfirmation">Confirm password</label>
          <input type="password" id="passwordConfirmation" name="passwordConfirmation" />
          <div>CAPTCHA?</div>
          <button>Register</button>
        </form>
        <div>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    );
  }
}

export default Signup;
