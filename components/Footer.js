const Footer = () => (
  <footer className="bg-teal-500 text-white relative">
   
    {/* Footer Content */}
    <div className="container mx-auto relative z-10 py-16 px-6">
      <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-bold mb-4 uppercase tracking-wide">TACT(U) - School of Biotech Sciences</h2>
          <p>F2, Chandaka Industrial Estate</p>
          <p>Infocity Area, Chandrasekharpur</p>
          <p>Bhubaneswar - 751024</p>
          <p className="mt-4 flex items-center gap-2">
            <span className="text-xl">📞</span> 9337528083
          </p>
          <p className="flex items-center gap-2">
            <span className="text-xl">✉️</span> info@tsbs.ac.in
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <a href="#" className="hover:text-teal-700 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-teal-700 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-teal-700 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-teal-700 text-xl">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-teal-700 text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About TSBS", "Infrastructure", "Courses", "Faculty", "Student Clubs"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Additional Information</h3>
          <ul className="space-y-2">
            {["Research", "Hostels", "Internship Program", "Laboratories", "Contact Us"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
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
