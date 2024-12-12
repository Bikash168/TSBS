import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Section */}
      <div className="bg-teal-100 p-2 text-teal-900 relative">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-teal-900">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-teal-900" />
              9337528083
            </span>
            <span className="flex items-center text-teal-900">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-teal-900" />
              info@tsbs.ac.in
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <a href="/">
            <img
              src="/logo.png"
              alt="Trident Academy Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-teal-900">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`lg:static lg:bg-transparent lg:text-teal-900 lg:flex lg:items-center lg:justify-end lg:space-x-6 fixed top-0 left-0 w-full h-full bg-teal-900 text-white transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:flex-row`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
            {[
              { label: 'Home', path: '/' },
              { label: 'Academics', path: '/academics' },
              { label: 'Facilities', path: '/facilities' },
              { label: 'Activities', path: '/activities' },
              { label: 'Admission', path: '/admission' },
              { label: 'Research', path: '/research' },
              { label: 'Best Practices', path: '/best-practices' },
              { label: 'Training', path: '/training' },
              { label: 'Placement', path: '/placement' },
              // Add other menu items here
            ].map((menuItem) => (
              <li
                key={menuItem.label}
                className={`text-lg font-medium cursor-pointer ${
                  router.pathname === menuItem.path
                    ? 'text-teal-300'
                    : 'hover:text-teal-300 lg:hover:text-teal-700'
                }`}
              >
                <button onClick={() => handleNavigation(menuItem.path)}>
                  {menuItem.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* New Navigation Bar */}
      <div className="bg-gray-100 p-2">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex space-x-6">
            {[
              { label: 'About TSBS', path: '/about' },
              { label: 'Our Alumni', path: '/alumni' },
              { label: 'Grievance', path: '/grievance' },
              { label: 'Contact Us', path: '/contact-us' },
              // Add other menu items here
            ].map((menuItem) => (
              <button
                key={menuItem.label}
                className="text-teal-900 hover:text-teal-700 px-4 py-2 text-sm"
                onClick={() => handleNavigation(menuItem.path)}
              >
                {menuItem.label}
              </button>
            ))}
          </div>
        </div>
      </div>

   
    </header>
  );
};

export default Header;
