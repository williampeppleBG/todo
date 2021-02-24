import React from 'react';
import { useLocation } from 'react-router-dom';
import Index from "./Todo/Index"
// import "./Todolist.css"

const TodoList = () => {
  const location = useLocation();
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>{location.data.first_name}'s Todos</h2>
       <Index />
    </div>
  );
};

export default TodoList;
