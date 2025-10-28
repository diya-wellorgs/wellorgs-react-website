import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/logo.avif';
import Button from './Button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed top-0 z-50 flex justify-center border-b border-[#222222] px-10 py-3">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <div className="flex gap-1 items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="h-11 w-11"
            />
            <h1 className="text-[21px] font-bold">Wellorgs AI</h1>
          </div>
          <div className="flex items-center gap-4">
            <ul className="flex items-center ">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="py-2 px-3.5 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <Button text="Book a call" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
