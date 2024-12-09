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
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Link href="https://facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </Link>
            <Link href="https://twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </Link>
            <Link href="https://instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </Link>
            <Link href="https://linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-teal-900 hover:text-teal-700 h-5 w-5"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Trident Academy Logo"
              className="h-16 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-teal-900">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-teal-900 text-white transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:bg-transparent lg:text-teal-900 lg:flex lg:items-center lg:space-x-6`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6 lg:space-y-0 lg:flex-row lg:space-x-6">
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <Link href="/about" onClick={toggleMenu}>About TSBS</Link>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <Link href="/academics" onClick={toggleMenu}>Academics</Link>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <Link href="/admissions" onClick={toggleMenu}>Admission</Link>
            </li>
            <li className="text-lg font-medium hover:text-teal-300 lg:hover:text-teal-700">
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        ></div>
      )}
    </header>
  );
}
