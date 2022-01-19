import React from 'react';

import '@styles/TodoHeader.scss';
import menu from '@icons/menu_icon.svg';

const TodoHeader = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <nav className='header'>
      <div className='header__mobile'>
        <div className='header__frame'>
          <span></span>
          <img src={menu} alt="" onMouseEnter={handleToggleMenu} />
        </div>

        <ul className='header__mobile-menu'>
          <li>All</li>
          <li>Completed</li>
          <li>Pending</li>
        </ul>
      </div>
      <div className='header__desktop'>
        <ul className="header__menu">
          <li>All</li>
          <li>Completed</li>
          <li>Pending</li>
        </ul>
      </div>
    </nav>
  );
}

export default TodoHeader;