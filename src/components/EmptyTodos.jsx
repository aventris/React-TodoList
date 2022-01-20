import React from 'react';

import '@styles/EmptyTodos.scss';

import downArrow from '@icons/down_arrow.svg';

const EmptyTodos = () => {
  return (
    <div className='emptytodos'>
      <h3 >Create your first ToDo</h3>
      <img src={downArrow} alt="" />
    </div>

  );
}

export default EmptyTodos;