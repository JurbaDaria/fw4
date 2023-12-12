import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Task Manager</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/saved">Избранное</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
