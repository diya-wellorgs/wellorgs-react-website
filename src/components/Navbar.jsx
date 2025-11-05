import { useRef } from 'react';

import { Link } from 'react-router-dom';

import logo from '../assets/logo.avif';
import ActiveLink from './ui/ActiveLink';
import Button from './ui/Button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
];

const Navbar = () => {
  return (
    <>
      <nav className="max-h-0 overflow-visible w-full fixed z-50 flex justify-center border-[#222222] px-10 top-10">
        <div className="bg-red-100 absolute inset-0 w-full h-full py-10 -top-10 pointer-events-none nav-bg -z-10"></div>
        <div className="flex items-center justify-between w-full max-w-7xl">
          <Link
            to="/"
            className="flex gap-1 items-center justify-center"
          >
            <img
              src={logo}
              alt="logo"
              className="h-10 w-11"
            />
            <h1 className="text-[25px] font-bold">Wellorgs AI</h1>
          </Link>
          <div className="flex items-center gap-4">
            <ul className="flex items-center ">
              {navLinks.map((link) => (
                <ActiveLink
                  key={link.to}
                  to={link.to}
                >
                  {link.label}
                </ActiveLink>
              ))}
            </ul>
            <Button
              className="pointer-events-auto"
              text="Book a call"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
