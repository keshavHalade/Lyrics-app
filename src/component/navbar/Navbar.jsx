import React from 'react';

function Navbar() {
  return (
    <nav> 
      <h1>My Lyrics App</h1>
      <ul className='list'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/search'>Search</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
