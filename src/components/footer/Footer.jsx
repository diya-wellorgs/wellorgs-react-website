import React, { useState } from 'react';

import logo from '../../assets/logo.avif';
import CookiesSettings from '../CookiesSettings';
import FooterColumn from './FooterColumn';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  const handleCookiesClick = (e) => {
    e.preventDefault();
    setShowCookieSettings(true);
  };

  const policiesLinks = [
    { name: 'T&C', path: '/terms' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Legal', path: '/legal' },
    { name: 'Cookies', path: '#', onClick: handleCookiesClick },
  ];

  const linksLinks = [
    { name: 'Process', path: '/process' },
    { name: 'Services', path: '/services' },
    { name: 'Benefits', path: '/benefits' },
  ];
  const pagesLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '#' },
    { name: 'Blogs', path: '/blog' },
  ];

  const socialLinks = [
    { name: 'X', path: '#' },
    { name: 'LinkedIn', path: '#' },

    { name: 'Instagram', path: '#' },
    { name: 'Contact us', path: '/contact' },
  ];

  const renderLinks = (links) =>
    links.map((link) => (
      <li key={link.name}>
        <a
          href={link.path}
          onClick={link.onClick}
          className="text-base text-[#cccccc] hover:text-white"
        >
          {link.name}
        </a>
      </li>
    ));

  return (
    <footer className="footer-bg-gradient text-white mt-25  ">
      {showCookieSettings && (
        <CookiesSettings
          showCookieBanner={showCookieSettings}
          setShowCookieBanner={setShowCookieSettings}
        />
      )}
      <div className=" max-w-5xl mx-auto flex justify-between gap-10  py-16">
        {/* Logo and Newsletter */}
        <div className="">
          <div className="flex items-center  ">
            <img
              src={logo}
              alt="Wellorgs AI"
              className="w-[131px] h-[131px]"
            />
            <span className="text-3xl font-semibold">Wellorgs AI</span>
          </div>
          <NewsletterForm />
        </div>

        {/* Columns */}
        <div className="grid  grid-cols-4 gap-15">
          <div>
            <h3 className="text-[18px] font-semibold ">Policies</h3>
            <ul className="mt-1 space-y-1">{renderLinks(policiesLinks)}</ul>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold ">Links</h3>
            <ul className="mt-1 space-y-1">{renderLinks(linksLinks)}</ul>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold  ">Pages</h3>
            <ul className="mt-1 space-y-1">{renderLinks(pagesLinks)}</ul>
          </div>
          <div>
            <h3 className="text-[18px] font-semibold ">Social</h3>
            <ul className="mt-1 space-y-1">{renderLinks(socialLinks)}</ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t-2 px-10 py-[25px] border-border  w-full flex flex-col md:flex-row  justify-between  text-sm text-gray-400">
        <p>India | Canada | UAE</p>
        <p className=" text-secondary ">Wellorgs Infotech © 2025</p>
        <p className=" text-gray-400 ">© All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
