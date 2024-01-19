import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logoImg from '../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleBarClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setShowMobileNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className='' style={{ background: '#fff', padding: '0.5rem' }}>
        <div className="container d-flex justify-content-between align-items-center text-black">
          <div className='logo fw-bold d-flex justify-content-center align-items-center gap-2' style={{ fontSize: '1.5rem' }}>
            <img src={logoImg} alt='' style={{ width: '30%' }} />
            <span>ONE BOOK</span>
          </div>
          <ul className={showMobileNav ? 'nav-list d-flex list-unstyled mb-0' : 'nav-list-mobile'}>
            <li className='nav-items me-3' style={{ cursor: 'pointer' }} onClick={closeMobileNav}>
              Home
            </li>
            <li className='nav-items me-3' style={{ cursor: 'pointer' }} onClick={closeMobileNav}>
              About
            </li>
          </ul>
          <div className='menu-icon me-5' onClick={handleBarClick}>
            <FaBars size={25} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
