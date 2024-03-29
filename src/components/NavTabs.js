import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h2 className='big-text'>John Medeiros</h2>
      <ul className="nav nav-tabs justify-content-end nav-links"> {/* Add the 'nav-links' class */}
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#games"
            onClick={() => handlePageChange('Games')}
            className={currentPage === 'Games' ? 'nav-link active' : 'nav-link'}
          >
            Games
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
