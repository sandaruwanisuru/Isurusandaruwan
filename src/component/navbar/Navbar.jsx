import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
      </div>
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/">About Me</a>
        </li>
        <li>
          <a href="/">Skills</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
