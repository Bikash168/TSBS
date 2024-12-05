import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';  // Import bars and times icons
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      {/* Top Section */}
      <div className="bg-teal-100 p-2 text-teal-900">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Information */}
          <div className="flex items-center space-x-6">
            {/* Mobile Number */}
            <span className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-teal-900" />
              9337528083
            </span>

            {/* Email ID */}
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
        <div>
          <img
            src="/logo.png"
            alt="Trident Academy Logo"
            className="h-12"
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-teal-900">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} space-x-6`}>
          <ul className="flex flex-col lg:flex-row space-x-0 lg:space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About TSBS</Link></li>
            <li><Link href="/academics">Academics</Link></li>
            <li><Link href="/admissions">Admission</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
