import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './Login.css'

export class Login extends Component {

  
    render() {
      return (
        <div className="pagecenter loginForm">
          <form>
            <div className="row">
              <label htmlFor="username" className="col-sm-2 col-form-label credentials">Email:</label>
              <div className="col-sm-3 mb-2">
                <input type="text" name="username" className="form-control credentials" id="username" placeholder="Email" />
              </div>
              <div className="col-sm-4">
              </div>
            </div>
            <div className="row">
              <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
              <div className="col-sm-3 mb-2">
                <input type="password"  autoComplete="on" name="password" className="form-control" id="password" placeholder="Password" />
        
              </div>
            </div>
           
            <div className="col-button">
              <div className="mr-6">
                <button type="submit" className="button" onClick={this.loginForm}>Login</button>
              </div>
              <div className="ml-6">
               <Link to="/forgotpassword"><button type="submit" className="button" onClick={this.loginForm}>Forgot Password</button></Link> 
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  export default Login;