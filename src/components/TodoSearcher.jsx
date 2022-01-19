import React from 'react';

import '@styles/TodoSearcher.scss'

import downArrow from '@icons/down_arrow.svg'
import upArrow from '@icons/up_arrow.svg'
const TodoSearcher = () => {
  const [toggleFilter, setToggleFilter] = React.useState(false);

  return (
    <section className='searcher'>
      <input className='searcher__input' placeholder='Search Todo' type="text" />
      <div className='searcher__filter'>
        <div className='searcher__filter-container'>

          <p>All</p>
          <img src={downArrow} alt="" />
        </div>
        <ul>
          <li>All</li>
          <li>Completed</li>
          <li>Pending</li>
        </ul>
      </div>
    </section>
  );
}

export default TodoSearcher;