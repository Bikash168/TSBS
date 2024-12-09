import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Close the menu
    router.push(path); // Navigate to the desired page
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      {/* Top Section */}
      <div className="bg-teal-100 p-2 text-teal-900">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-teal-900" />
              9337528083
            </span>

            <span className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-teal-900" />
              info@tsbs.ac.in
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-3">
            <a href="https://facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
            <a href="https://twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
            <a href="https://instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
            <a href="https://linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
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
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <button onClick={() => handleNavigation('/')}>Home</button>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <button onClick={() => handleNavigation('/about')}>About TSBS</button>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <button onClick={() => handleNavigation('/academics')}>Academics</button>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <button onClick={() => handleNavigation('/admissions')}>Admission</button>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <button onClick={() => handleNavigation('/contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
