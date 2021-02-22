import React from 'react';
import { useLocation } from 'react-router-dom';

function TodoList() {
  const location = useLocation;
  return (
    <div className="center mt-3">
      <h1>
        Welcome {location.data.first_name} {location.data.last_name}
      </h1>
      <p>Kindly wait as your todos sync</p>
    </div>
  );
}

export default TodoList;
