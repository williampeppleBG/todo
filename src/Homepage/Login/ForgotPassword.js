import React, { useState } from 'react';
import './Login.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [forgotEmail, updateForgotEmail] = useState('');
  const forgotForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pagecenter loginForm">
      <form onSubmit={forgotForm}>
        <label htmlFor="username" className="col-form-label">
          Email
        </label>
        <input
          type="text"
          name="forgot-email"
          className="form-control"
          id="forgot-email"
          placeholder="Email"
          value={forgotEmail}
          onChange={(e) => updateForgotEmail(e.target.value)}
          required
        />
        <div className="btn-container mt-3">
          <button type="submit" className="button btn-forgot">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
