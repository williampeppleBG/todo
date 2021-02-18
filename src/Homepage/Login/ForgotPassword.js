import React, { Component } from 'react'
import './Login.css'

export class ForgotPassword extends Component {

  
    render() {
      return (
        <div className="pagecenter loginForm">
          <form>
            <div className="row">
              <div className="col-sm-3"></div>
              <label htmlFor="username" className="col-sm-2 center col-form-label">Email:</label>
              <div className="col-sm-3 mb-2">
                <input type="text" name="username" className="form-control" id="username" placeholder="Email" />
              </div>
              <div className="col-sm-4">
              </div>
            </div>
           
            <div className="row">
              <div className="mr-6">
                <button type="submit" className="button" onClick={this.loginForm}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      )
    }
  }

  export default ForgotPassword;