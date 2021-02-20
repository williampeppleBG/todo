import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pagecenter loginForm">
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="col-form-label credentials">
              Email
            </label>
            <input
              type="text"
              name="username"
              className="form-control credentials"
              id="username"
              placeholder="xyz@example.com"
            />
          </div>
          <div className="">
            <label htmlFor="password" className="col-form-label">
              Password
            </label>
            <input
              type="password"
              autoComplete="on"
              name="password"
              className="form-control"
              id="password"
              placeholder="234****"
            />
          </div>

          <div className="col-button">
            <div className="mr-6">
              <button type="submit" className="button" onClick={this.loginForm}>
                Login
              </button>
            </div>
            <div className="ml-6">
              <Link to="/forgotpassword">
                <button
                  type="submit"
                  className="button"
                  onClick={this.loginForm}
                >
                  Forgot Password
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
