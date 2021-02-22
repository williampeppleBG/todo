import React from 'react';
import { useLocation } from 'react-router-dom';

const TodoList = () => {
  const location = useLocation();
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h2>{location.data.first_name}'s Todos</h2>
      <p>In Progress</p>
      <p>Done</p>
      <p>Paused</p>
    </div>
  );
};

export default TodoList;
