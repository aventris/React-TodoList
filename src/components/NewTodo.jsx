import React from 'react';

import Modal from '@containers/Modal';

import '@styles/NewTodo.scss';

const NewTodo = () => {
  return (
    <Modal>
      <div className='add-todo'>
        <span>Add new Todo</span>
        <textarea name="" id="" cols="30" rows="3"></textarea>
        <div className='add-todo__button-container'>
          <button className='add-todo__add'>Add</button>
          <button className='add-todo__cancel'>Cancel</button>
        </div>
      </div>
    </Modal>
  );
}

export default NewTodo;