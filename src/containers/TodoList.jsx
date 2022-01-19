import React from 'react';

import '@styles/TodoList.scss'
const TodoList = ({ children }) => {
  return (
    <section className='todo-list'>
      <ul>
        {children}
      </ul>
    </section>
  );
}

export default TodoList;