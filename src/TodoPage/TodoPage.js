import React from 'react';
import Header from '../HomePage/Header/Header';
import TodoList from './TodoList';
import { useLocation } from 'react-router-dom';

const TodoPage = () => {
  const location = useLocation();
  return (
    <div>
      <Header name={location.data.first_name} />
      <TodoList />
    </div>
  );
};

export default TodoPage;
