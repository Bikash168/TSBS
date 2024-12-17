import Layout from '../components/Layout';
import Link from 'next/link';

const EResources = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="w-full mb-6 text-sm text-teal-600">
            <ul className="flex space-x-2">
              <li>
                <Link href="/" className="hover:underline flex items-center">
                  <span className="mr-1">🏠</span> Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/library" className="hover:underline">
                  Library
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">E-Resources</li>
            </ul>
          </nav>

          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">E-Resources</h1>

          {/* Content Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 mb-4">
              The library offers an extensive range of e-resources to enhance the academic and research needs of students and faculty members. These resources include e-books, e-journals, online databases, and more, enabling access to valuable information from anywhere.
            </p>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Available E-Resources</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>e-Books:</strong> Access a wide range of digital books across various subjects.
              </li>
              <li>
                <strong>e-Journals:</strong> Stay updated with the latest research articles and publications.
              </li>
              <li>
                <strong>Online Databases:</strong> Explore premium academic and research databases.
              </li>
              <li>
                <strong>Learning Portals:</strong> Utilize resources like NPTEL, SWAYAM, and other online courses.
              </li>
              <li>
                <strong>Digital Library Services:</strong> Access institutional repositories and digital archives.
              </li>
            </ul>
          </div>

          {/* Access Information */}
          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">How to Access</h2>
            <p className="text-lg text-gray-700">
              Students and faculty can access these resources using their library credentials. For any assistance, please contact the library helpdesk or send an email to <a href="mailto:library@trident.ac.in" className="text-teal-600 hover:underline">library@trident.ac.in</a>.
            </p>
          </div>

          {/* Useful Links */}
          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Quick Links</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  National Digital Library of India
                </a>
              </li>
              <li>
                <a href="https://www.inflibnet.ac.in/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  INFLIBNET
                </a>
              </li>
              <li>
                <a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  SWAYAM
                </a>
              </li>
              <li>
                <a href="https://nptel.ac.in/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  NPTEL
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EResources;
