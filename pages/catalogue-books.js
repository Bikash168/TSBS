import Layout from '../components/Layout';
import Link from 'next/link';

const CatalogueOfBooks = () => {
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
              <li className="text-gray-500">Catalogue of Books</li>
            </ul>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">
            Catalogue of Books
          </h1>

          {/* Catalogue Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Explore the Catalogue
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Browse through the comprehensive catalogue of books available in our library. Click the links below to view or download the respective PDFs.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <Link
                  href="https://tsbs.ac.in/academics/library/catalogue-of-books/"
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  Catalogue of Science Books
                </Link>
              </li>
              <li>
                <Link
                  href="https://tsbs.ac.in/academics/library/catalogue-of-books/"
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  Catalogue of Engineering Books
                </Link>
              </li>
              <li>
                <Link
                  href="https://tsbs.ac.in/academics/library/catalogue-of-books/"
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  Catalogue of Management Books
                </Link>
              </li>
              <li>
                <Link
                  href="https://tsbs.ac.in/academics/library/catalogue-of-books/"
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  Catalogue of General Books
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CatalogueOfBooks;
