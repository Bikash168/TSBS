const Footer = () => (
    <footer className="bg-teal-500 text-white relative">
      {/* Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-32 -top-8"
        >
          <path
            fill="#ffffff"
            d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,122.7C840,117,960,171,1080,165.3C1200,160,1320,96,1380,64L1440,32V320H0Z"
          />
        </svg>
      </div>
  
      {/* Footer Content */}
      <div className="container mx-auto relative z-10 py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">TACT(U)-SCHOOL OF BIOTECH SCIENCES</h2>
            <p>F2, Chandaka Industrial Estate</p>
            <p>Infocity Area, Chandrasekharpur</p>
            <p>Bhubaneswar - 751024</p>
            <p className="mt-4 flex items-center gap-2">
              📞 9337528083
            </p>
            <p className="flex items-center gap-2">
              ✉️ info@tsbs.ac.in
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-teal-700">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
  
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">About TSBS</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Infrastructure</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Courses</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Faculty</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Student Clubs</a>
              </li>
            </ul>
          </div>
  
          {/* More Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Additional Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">Research</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Hostels</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Internship Program</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Laboratories</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* Copyright */}
      <div className="bg-teal-700 py-4">
        <p className="text-center text-white text-sm">
          © 2024 TACT-School of Biotech Sciences (TSBS).
        </p>
      </div>
    </footer>
  );
  
  export default Footer;
  