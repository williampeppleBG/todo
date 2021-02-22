import React from 'react';
import './Header.css';

const Header = (props) => {
  if (!props.name) {
    return <h1>Todo App</h1>;
  } else {
    return <h1>Welcome {props.name}</h1>;
  }
};

export default Header;
