import React from 'react';

import Modal from '@containers/Modal';

import '@styles/NewTodo.scss';

const NewTodo = ({ setOpenForm, addTodo }) => {
  const [formInput, setFormInput] = React.useState("");

  const handleFormInput = (event) => {
    setFormInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(formInput);
    setOpenForm(false);

  }

  const onCancel = () => {
    setOpenForm(false);
  }
  return (
    <Modal>
      <form onSubmit={handleSubmit} className='add-todo'>
        <span>Add new ToDo</span>
        <textarea
          value={formInput}
          onChange={handleFormInput}
          name=""
          id=""
          cols="30"
          rows="3"
          required
        />
        <div className='add-todo__button-container'>
          <button type='submit' className='add-todo__add'>Add</button>
          <button type='button' className='add-todo__cancel' onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewTodo;