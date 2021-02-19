import React, { Component } from 'react';
import './Login.css';
import './ForgotPassword.css';

class ForgotPassword extends Component {
  render() {
    return (
      <div className="pagecenter loginForm">
        <form>
          <label htmlFor="username" className="col-form-label">
            Email
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Email"
          />
          <div className="btn-container mt-3">
            <button
              type="submit"
              className="button btn-forgot"
              onClick={this.loginForm}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
