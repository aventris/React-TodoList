import React from 'react';

import checkIcon from '@icons/check_icon.svg'
import checkIconBlack from '@icons/check_icon_black.svg'
import closeIcon from '@icons/close_icon.svg'

import '@styles/TodoItem.scss';

const TodoItem = ({ data, onComplete, onDelete }) => {
  return (
    <li className={`todo-item ${data.status ? "todo-item--done" : ""}`}>

      <img
        className='todo-item__check'
        src={!data.status ? checkIconBlack : checkIcon}
        onClick={() => onComplete(data.text)}
      />
      <p className='todo-item__text' >{data.text}</p>
      <img
        className='todo-item__delete'
        src={closeIcon}
        onClick={() => onDelete(data.text)}
      />
    </li>

  );
}

export default TodoItem;