import Layout from '../components/Layout';
import Link from 'next/link';

const CatalogueJournals = () => {
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
              <li className="text-gray-500">Catalogue of Journals</li>
            </ul>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">
            Catalogue of Journals
          </h1>

          {/* Journals Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Journals
            </h2>
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">SL No</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Period</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Indian Journal of Medical Research', 'Monthly'],
                  ['2', 'Indian Journal of Microbiology', 'Quarterly'],
                  ['3', 'Annual REV of Biochemistry', 'Annual'],
                  ['4', 'Indian Journal of Biochemistry & Biophysics', 'Bi-monthly'],
                  ['5', 'Advanced Biotech', 'Monthly'],
                  ['6', 'Journal of Plant Biochemistry and Biotechnology', 'Half Yearly'],
                  ['7', 'Annual Rev of Microbiology', 'Annual'],
                  ['8', 'Indian Journal of Experimental Biology', 'Monthly'],
                  ['9', 'Journal of Biochemistry', 'Monthly'],
                ].map(([sl, name, period]) => (
                  <tr key={sl}>
                    <td className="border border-gray-300 px-4 py-2">{sl}</td>
                    <td className="border border-gray-300 px-4 py-2">{name}</td>
                    <td className="border border-gray-300 px-4 py-2">{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Periodicals Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Periodicals (Journals for 2024)
            </h2>
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">SL No</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Issues/Yr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Bio Science Research Bulletin', '2'],
                  ['2', 'Current Science', '24'],
                  ['3', 'Indian Journal Of Experimental Biology', '12'],
                  ['4', 'Indian Journal Of Microbiology', '4'],
                  ['5', 'Indian Journal Of Natural Products & Resources', '4'],
                  ['6', 'Indian Journal Of Traditional Knowledge', '12'],
                  ['7', 'Research & Review In Biotechnology & Bioscience', '2'],
                ].map(([sl, title, issues]) => (
                  <tr key={sl}>
                    <td className="border border-gray-300 px-4 py-2">{sl}</td>
                    <td className="border border-gray-300 px-4 py-2">{title}</td>
                    <td className="border border-gray-300 px-4 py-2">{issues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Periodicals (Magazines) Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Periodicals (Magazines for 2024)
            </h2>
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">SL No</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Issues/Yr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Science Reporter', '12'],
                  ['2', 'Biospectrum', '12'],
                ].map(([sl, title, issues]) => (
                  <tr key={sl}>
                    <td className="border border-gray-300 px-4 py-2">{sl}</td>
                    <td className="border border-gray-300 px-4 py-2">{title}</td>
                    <td className="border border-gray-300 px-4 py-2">{issues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* New Arrivals Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              New Arrivals
            </h2>
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">SL No</th>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Issues/Yr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'Indian Journal of Natural Products & Resources', '4'],
                  ['2', 'Indian Journal of Traditional Knowledge', '12'],
                  ['3', 'Indian Journal of Experimental Biology', '12'],
                ].map(([sl, title, issues]) => (
                  <tr key={sl}>
                    <td className="border border-gray-300 px-4 py-2">{sl}</td>
                    <td className="border border-gray-300 px-4 py-2">{title}</td>
                    <td className="border border-gray-300 px-4 py-2">{issues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CatalogueJournals;
