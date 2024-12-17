import Layout from '../components/Layout';
import Link from 'next/link';

const LibraryVisionMission = () => {
  return (
    <Layout>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <li className="text-gray-500">Vision & Mission</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">Vision & Mission of the Library</h1>

          {/* Vision Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Vision</h2>
            <p className="text-lg text-gray-700">
              The library aims to be one of the best among colleges in Eastern India. It intends to incorporate the latest technology and adopt a user-friendly approach towards students and faculty. The library is committed to offering comprehensive services related to the dissemination of knowledge.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Mission</h2>
            <p className="text-lg text-gray-700">
              The library serves as a resource center and aims to develop a comprehensive collection of documents useful for faculty and students of the institute. It ensures the efficient dissemination of knowledge.
            </p>
          </div>

          {/* Goals Section */}
          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Goals</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To serve the academic needs of all students and faculty members.
              </li>
              <li className="text-lg text-gray-700">
                To develop a comprehensive collection of books and journals across all related subjects for teaching and reference purposes.
              </li>
              <li className="text-lg text-gray-700">
                To acquire and organize information resources to meet the present and future needs of its users.
              </li>
              <li className="text-lg text-gray-700">
                To maintain an up-to-date database of books available in the library, with ongoing editing and updating of recently acquired books.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LibraryVisionMission;
