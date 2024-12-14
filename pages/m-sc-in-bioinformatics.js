import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const MScBioinformatics = () => {
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
              <li className="text-gray-500">M.Sc. in Bioinformatics</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">M.Sc. in Bioinformatics</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Master of Science (M.Sc.) in Bioinformatics is a multidisciplinary program that combines biology, computer science, and information technology to analyze and interpret biological data. This program is designed to equip students with the tools and skills needed to understand complex biological information and apply computational techniques to solve problems in genomics, proteomics, and molecular biology.
            </p>
            <p className="text-lg text-gray-700">
              Students learn how to use software and algorithms to analyze large biological datasets, such as DNA sequences, protein structures, and gene expression profiles. The curriculum includes courses in molecular biology, biostatistics, data mining, machine learning, and biological databases. Graduates of this program are well-prepared for careers in research, pharmaceuticals, healthcare, and biotechnology industries.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To provide a comprehensive understanding of bioinformatics tools and techniques to analyze biological data effectively.
              </li>
              <li className="text-lg text-gray-700">
                To train students in areas like molecular biology, genome editing, data analysis, and computational biology.
              </li>
              <li className="text-lg text-gray-700">
                To prepare students for careers in research, pharmaceuticals, biotechnology, healthcare, and academic environments.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Key Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                <strong>Interdisciplinary Curriculum:</strong> Combines biology with computational skills, statistics, bioinformatics, and machine learning.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Focus on Practical Skills:</strong> Offers hands-on experience through lab work, internships, workshops, and research projects.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Research-Oriented Learning:</strong> Encourages continuous involvement in research and publication of work.
              </li>
              <li className="text-lg text-gray-700">
                <strong>Industry-Relevant Skills:</strong> Prepares students for careers in pharmaceuticals, biotechnology, healthcare, and academic research.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MScBioinformatics;
