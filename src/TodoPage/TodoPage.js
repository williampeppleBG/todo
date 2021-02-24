import React from 'react';
import Header from '../Homepage/Header/Header';
import TodoList from './TodoList';
import { useLocation } from 'react-router-dom';
import "../TodoPage/Todolist.css"

const TodoPage = () => {
  const location = useLocation();
  return (
    <div className="top">
      <Header name={location.data.first_name}/>
      <TodoList />
    </div>
  );
};

export default TodoPage;
