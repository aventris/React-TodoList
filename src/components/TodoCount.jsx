import React from 'react';

import '@styles/TodoCount.scss'

const TodoCount = ({ completed, total }) => {
  return (
    <p className='todocount'>
      {`You have completed ${completed || '0'} of ${total || '0'} ToDos`}
    </p>
  );
}

export default TodoCount;