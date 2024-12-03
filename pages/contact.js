import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto my-10">
        {/* Page Title */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-teal-600">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-700">
            Get in touch with TACT-School of Biotech Sciences (TSBS) for inquiries, feedback, or support.
          </p>
        </section>

        {/* Contact Information */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Our Contact Details</h2>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Address:</strong> F2, Chandaka Industrial Estate, Infocity Area, Chandrasekharpur, Bhubaneswar - 751024
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Email:</strong> info@tsbs.ac.in
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Phone:</strong> +91 9337528083
          </p>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.079453592388!2d85.81936281495902!3d21.268774485860295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190914b3ec99cf%3A0x8cfae75b501e5b29!2sInfocity%2C%20Bhubaneswar%2C%20Odisha%20751024!5e0!3m2!1sen!2sin!4v1633950240503!5m2!1sen!2sin"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="border rounded-lg shadow-md"
            ></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="my-16">
          <h2 className="text-2xl font-bold text-teal-600">Send Us a Message</h2>
          <form className="mt-8 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
