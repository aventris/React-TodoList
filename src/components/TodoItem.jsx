import React from 'react';

import checkIcon from '@icons/check_icon.svg'
import checkIconBlack from '@icons/check_icon_black.svg'
import closeIcon from '@icons/close_icon.svg'

import '@styles/TodoItem.scss';

const TodoItem = ({ data }) => {
  const [check, setCheck] = React.useState(false);
  console.log(data)
  return (

    <li className={`todo-item ${data.status ? "todo-item--done" : ""}`}>

      <img className='todo-item__check' src={!data.status ? checkIconBlack : checkIcon} alt="" />
      <p className='todo-item__text' >{data.text}</p>
      <img className='todo-item__delete' src={closeIcon} alt="" />
    </li>

  );
}

export default TodoItem;