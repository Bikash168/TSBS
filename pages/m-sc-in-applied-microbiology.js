import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const MScAppliedMicrobiology = () => {
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
              <li className="text-gray-500">M.Sc. in Applied Microbiology</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">M.Sc. in Applied Microbiology</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Program</h2>
            <p className="text-lg text-gray-700 mb-4">
              The M.Sc. in Applied Microbiology provides students with both theoretical knowledge and practical skills in various areas of microbiology. The course includes key subjects such as Food and Dairy Microbiology, Medical Microbiology, Recombinant DNA Technology, Environmental Microbiology, Microbial Biotechnology, Agricultural Microbiology, Microbial Physiology, and Fermentation Technology. It aims to meet the growing demand for professionals in Applied Microbiology and Microbial Biotechnology. A key strength of this program at Trident is its strong focus on practical learning, which prepares students for careers in research or industry. The combination of theoretical studies and hands-on experience equips graduates to successfully navigate and address the challenges they will encounter in their professional careers.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To provide a deep understanding of advanced topics such as Biochemistry, Instrumentation Sciences, Bioinformatics (focusing on structure-function relationships), Molecular Biology, Genetic Engineering, Immunology, Environmental Biotechnology, and Plant and Animal Biotechnology.
              </li>
              <li className="text-lg text-gray-700">
                To offer hands-on experience in handling laboratory instruments and automation, with training provided both in-house and through industry visits.
              </li>
              <li className="text-lg text-gray-700">
                To develop skills needed to read and analyze research journals, interpret data, combine ideas, and write manuscripts for publication.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Student Development</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Developing a research mindset through practical laboratory work, reading peer-reviewed journals, and interacting with scientists and faculty.
              </li>
              <li className="text-lg text-gray-700">
                Gaining the ability to perform laboratory experiments accurately while using books and online resources for research.
              </li>
              <li className="text-lg text-gray-700">
                Improving communication skills, working well in team environments, and focusing on personal growth.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MScAppliedMicrobiology;
