import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const MScBiotechnology = () => {
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
              <li className="text-gray-500">M.Sc. in Biotechnology</li>
            </ul>
          </nav>
          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">M.Sc. in Biotechnology</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Program</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Master’s degree program in Biotechnology at TSBS combines classroom teaching with practical laboratory work and industrial exposure. This two-year course focuses on advanced biology knowledge and the use of technology in biotechnology. Students will learn how living organisms are used to create controlled processes and products. The program covers subjects like Genetics, Microbiology, Biochemistry, Genetic Engineering, and Cancer Biology.
            </p>
            <p className="text-lg text-gray-700">
              Along with gaining detailed knowledge, students will also develop problem-solving and critical thinking skills, helping them tackle challenges in the biotechnology field.
            </p>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Program Objectives</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                To provide a strong foundation in basic sciences, with an emphasis on advanced topics in cell and molecular biology, biochemistry, immunology, plant and animal biotechnology, and other specialized fields.
              </li>
              <li className="text-lg text-gray-700">
                To introduce key concepts from interdisciplinary subjects such as chemistry, mathematics, computer applications, and biostatistics, helping students develop a comprehensive understanding.
              </li>
              <li className="text-lg text-gray-700">
                To encourage innovation and entrepreneurship in science and technology, fostering sustainable research ideas and new developments.
              </li>
              <li className="text-lg text-gray-700">
                To promote a sense of social responsibility and raise awareness of the importance of contributing to societal well-being.
              </li>
              <li className="text-lg text-gray-700">
                To foster collaboration with peers from different disciplines in industry and society, contributing to the country's economic growth.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Student Development</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Developing strong analytical skills by applying chemistry, mathematics, informatics, and statistics to solve biological challenges.
              </li>
              <li className="text-lg text-gray-700">
                Achieving precision in laboratory experiments and using books and online resources effectively for research and learning.
              </li>
              <li className="text-lg text-gray-700">
                Improving communication abilities, fostering teamwork, and supporting personal growth to prepare students for multidisciplinary opportunities.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MScBiotechnology;
