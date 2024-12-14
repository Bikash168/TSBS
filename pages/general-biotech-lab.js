import Layout from '../components/Layout'; // Ensure you have a Layout component for your site's structure
import Link from 'next/link'; // Import Link from next/link

const GeneralBiotechLab = () => {
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
                <Link href="/laboratories" className="hover:underline">
                Laboratories
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-500">General Biotech Lab</li>
            </ul>
          </nav>

          <h1 className="text-4xl font-extrabold text-center text-teal-600 mb-8">General Biotechnology Lab</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">About the Laboratory</h2>
            <p className="text-lg text-gray-700 mb-4">
              The General Biotechnology Lab is equipped with state-of-the-art infrastructure to facilitate hands-on
              learning in the field of biotechnology. The lab provides students with opportunities to gain practical
              experience in molecular biology, microbiology, biochemistry, and cell biology, ensuring they acquire
              the skills needed for cutting-edge research and industry applications.
            </p>
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Facilities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Modern lab equipment including microscopes, centrifuges, spectrophotometers, and PCR machines.
              </li>
              <li className="text-lg text-gray-700">
                Dedicated spaces for research in molecular biology, microbiology, and genetic engineering.
              </li>
              <li className="text-lg text-gray-700">
                High-standard safety protocols and lab guidelines to ensure a safe and productive environment for students.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Experiments and Practices</h2>
            <p className="text-lg text-gray-700 mb-4">
              Students in the General Biotechnology Lab engage in a range of practical experiments designed to
              strengthen their understanding of theoretical concepts and develop laboratory skills.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                DNA extraction and analysis.
              </li>
              <li className="text-lg text-gray-700">
                Microbial culture and identification.
              </li>
              <li className="text-lg text-gray-700">
                Enzyme activity assays and protein purification.
              </li>
              <li className="text-lg text-gray-700">
                Gel electrophoresis for DNA and protein analysis.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Learning Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg text-gray-700">
                Gain proficiency in handling and operating modern laboratory equipment used in biotechnology.
              </li>
              <li className="text-lg text-gray-700">
                Understand the fundamentals of molecular biology, genetics, and bioinformatics.
              </li>
              <li className="text-lg text-gray-700">
                Develop critical thinking and problem-solving skills through practical experiments and data analysis.
              </li>
              <li className="text-lg text-gray-700">
                Ability to work in teams and demonstrate safe laboratory practices while conducting experiments.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">Additional Information</h2>
            <p className="text-lg text-gray-700 mb-4">
              The General Biotechnology Lab is not only an essential part of our academic curriculum but also a
              center for research, helping students gain insights into real-world biotech challenges. Students can
              collaborate on research projects, hone their lab skills, and explore areas like biopharmaceuticals,
              bioengineering, and environmental biotechnology.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GeneralBiotechLab;
