import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const BScBiotechnology = () => {
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
                <Link href="/academics" className="hover:underline">
                  Academics
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/courses" className="hover:underline">
                Courses
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">B.Sc. in Biotechnology</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">B.Sc. in Biotechnology</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To provide an understanding of the principles of basic science with scope on advanced learning in the areas of cell and molecular biology, Biochemistry, Immunology, Plant and Animal Biotechnology, and other domain specializations.
              </li>
              <li className="text-lg text-gray-700">
                To inculcate the basic concepts of interdisciplinary courses through a subjective understanding of Chemistry, Mathematics, Computer Applications, and Biostatistics.
              </li>
              <li className="text-lg text-gray-700">
                To inculcate innovativeness and entrepreneurship activity in science and technology development, or implement sustainable ideas for new vistas in research.
              </li>
              <li className="text-lg text-gray-700">
                To develop a positive attitude towards social responsibility, awareness, and function.
              </li>
              <li className="text-lg text-gray-700">
                To interact with peers in other disciplines in industry and society and contribute to economic benefits of the country.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Student Development</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Development of an ability to apply the concepts of chemistry, mathematics, informatics, and statistics to biological problems.
              </li>
              <li className="text-lg text-gray-700">
                Development of an ability to conduct laboratory experiments with finesse and an attitude towards utilization of books and e-resources in the library.
              </li>
              <li className="text-lg text-gray-700">
                Development of an ability to communicate effectively, work in multidisciplinary teams, and personal development.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BScBiotechnology;
