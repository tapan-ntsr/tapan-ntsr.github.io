import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
          {/* <p className="navbar-links_logo newbtn">Tapan-ntsr</p> */}
        <div className="navbar-links_container">
          <p><a class="btn" href="#home">Home</a></p>
          <p><a class="btn" href="#about">About</a></p>
          <p><a class="btn" href="#skills">Skills</a></p>
          <p><a class="btn" href="#projects">Projects</a></p>
          <p><a class="btn" href="#contact">Contact</a></p>

        </div>
      </div>

      <div  className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a class="btn" href="#home">Home</a></p>
            <p><a class="btn" href="#about">About</a></p>
            <p><a class="btn" href="#skills">Skills</a></p>
            <p><a class="btn" href="#projects">Projects</a></p>
            <p><a class="btn" href="#contact">Contact</a></p>
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;