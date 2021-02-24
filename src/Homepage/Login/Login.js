import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const [users, updateUsers] = useState([]);
  let user1 = '',
    history = useHistory();
  useEffect(() => {
    const requestData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'TODO_BG_ygehfjdfbjhfeub83urj3urnuur83rn3',
      },
    };
    const todoURL =
      'https://todo-bg.herokuapp.com/index.php/api/users/syncDown?last_sync_time=2021-02-18 12:32:11';

    function getData(url = '') {
      return fetch(url, requestData);
    }
    getData(todoURL)
      .then((resp) => resp.json())
      .then((usersAPI) => {
        updateUsers(usersAPI.users);
      });
  }, []);

  console.log(users.length);

  const loginForm = (e) => {
    e.preventDefault();
    let boolean = false;
    users.forEach((user) => {
      if (user.email === email && user.password === password) {
        boolean = true;
        user1 = user;
      }
    });

    if (boolean) {
      console.log('You have been successfully logged in');
      history.push({
        pathname: './todopage',
        data: user1,
      });
    }
  };
  return (
    <div className="pagecenter loginForm">
      <form onSubmit={loginForm}>
        <div className="mb-3">
          <label htmlFor="username" className="col-form-label credentials">
            Email
          </label>
          <input
            type="text"
            name="useremail"
            className="form-control credentials"
            id="useremail"
            placeholder="xyz@example.com"
            onChange={(e) => updateEmail(e.target.value)}
            required
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
            onChange={(e) => updatePassword(e.target.value)}
            required
          />
        </div>

        <div className="col-button">
          <div className="mr-6">
            <button type="submit" className="button">
              Login
            </button>
          </div>
          <div className="ml-6">
            <Link to="/forgotpassword">
              <button type="submit" className="button">
                Forgot Password
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
