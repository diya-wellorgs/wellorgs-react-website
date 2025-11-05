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
      <nav className="w-full fixed top-0 z-50 nav-bg flex justify-center border-[#222222] px-10 py-3 pb-6">
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
            <Button text="Book a call" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
