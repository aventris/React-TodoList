import React from 'react';

import '@styles/CreateTodoButton.scss';

const CreateTodoButton = ({ setOpenForm }) => {
  const handleClick = () => {
    setOpenForm(prevState => !prevState);
  }
  return (
    <button onClick={handleClick} className='create-todo'>
      +
    </button>
  );
}

export default CreateTodoButton;