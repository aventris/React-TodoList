import React from 'react';

import '@styles/TodoSearcher.scss'

import downArrow from '@icons/down_arrow.svg'
import upArrow from '@icons/up_arrow.svg'
const TodoSearcher = ({ value, onChange, filter, handleFilter }) => {
  const [toggleFilter, setToggleFilter] = React.useState(false);

  const handleToggleFilter = (type) => {
    setToggleFilter(!toggleFilter);
    if (type)
      handleFilter(type);
  }

  return (
    <section className='searcher'>
      <input
        className='searcher__input'
        placeholder='Search Todo'
        type="text"
        value={value}
        onChange={onChange}
      />
      <div className='searcher__filter'>
        <div onClick={handleToggleFilter} className='searcher__filter-container'>
          <p>{filter}</p>
          <img src={downArrow} alt="" />
        </div>
        <ul>
          <li onClick={() => handleToggleFilter('All')}>All</li>
          <li onClick={() => handleToggleFilter('Completed')}>Completed</li>
          <li onClick={() => handleToggleFilter('Pending')}>Pending</li>
        </ul>
      </div>
    </section>
  );
}

export default TodoSearcher;